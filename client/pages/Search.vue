<template>
    <div class="section">
        <section :class="{'hero is-large': !results.length && !noMorePost, 'fixed': results.length || noMorePost}">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <tag-input :fetchSuggestions="fetchSuggestions"
                        v-model="tags"
                        @submit="searchPosts">
                    </tag-input>
                </div>
            </div>
        </section>
        <div v-if="results.length"
            v-masonry
            transition-duration="0.1s"
            item-selector=".result"
            :fitWidth="true"
            class="results">
            <div v-masonry-tile class="result" v-for="result in results">
                <router-link :to="{ name: 'singlePost', params: { postID: result.slug } }">
                    <img :src="result.image">
                </router-link>
            </div>
        </div>
        <div v-if="noMorePost" class="has-text-centered">
            Pas d'autres images à afficher.
        </div>
        <scroll-bottom @reach="loadBottom"
            :block="blockBottom || !results.length"
            :loading="loadingBottom">
        </scroll-bottom>
    </div>
</template>

<script>
    import Vue from 'vue';
    import ScrollBottom from '../components/ScrollBottom.vue';
    import TagInput from '../components/forms/TagInput.vue';
    import api from '../api/';
    import unwrapTags from '../libs/unwrapTags';

    export default {
        components: {
            TagInput,
            ScrollBottom
        },
        data() {
            return {
                loadingBottom: false,
                tags: [],
                searchDidOnce: false
            };
        },
        computed: {
            results() {
                return this.$store.state.posts.posts;
            },
            blockBottom() {
                return this.$store.state.posts.blockBottom;
            },
            include() {
                return this.$route.query.include || [];
            },
            exclude() {
                return this.$route.query.exclude || [];
            },
            noMorePost() {
                return this.blockBottom || (!this.results.length && this.searchDidOnce);
            }
        },
        methods: {
            fetchSuggestions(input) {
                return api({
                    path: 'GET_tags-suggestion-$input',
                    params: { input }
                });
            },
            searchPosts(tags) {
                this.loadingBottom = true;
                const query = { include: this.tags.filter(t => t.include).map(t => t.name).join(',') };
                const exclude = this.tags.filter(t => !t.include).map(t => t.name).join(',');
                if (exclude.length) query.exclude = exclude;
                this.$router.replace({
                    name: 'search',
                    query
                });
                this.$store.dispatch('posts/SEARCH_POSTS', {
                    tags: this.tags,
                    replace: true,
                    pageSize: 20
                }).then(posts => {
                    if (posts.length) Vue.redrawVueMasonry();
                    this.searchDidOnce = true;
                    this.$nextTick(() => (this.loadingBottom = false));
                });
            },
            loadBottom() {
                this.loadingBottom = true;
                return this.$store.dispatch('posts/SEARCH_POSTS', {
                    tags: this.tags,
                    reference: this.results[this.results.length - 1].posted_at,
                    excludeID: this.results[this.results.length - 1].slug,
                    pageSize: 20
                }).then(posts => {
                    if (posts.length) Vue.redrawVueMasonry();
                    this.$nextTick(() => (this.loadingBottom = false));
                });
            }
        },
        mounted() {
            this.tags = unwrapTags(this.$route.query.include, this.$route.query.exclude);
            this.searchDidOnce = !!this.tags.length;
        },
        asyncData({store, route: { query: { include, exclude } }}) {
            store.commit('posts/RESET_POSTS');
            const tags = unwrapTags(include, exclude);
            if (tags.length) {
                return store.dispatch('posts/SEARCH_POSTS', {
                    tags,
                    replace: true
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .limit-width {
        max-width: 600px;
        display: inline-block;
    }

    .result {
        text-align: center;
        width: 150px;
        margin: 5px;
        a img {
            display: inline-block;
            max-width: 100%;
            max-height: 300px;
        }
    }

    .section {
        position: relative;
        padding-top: 70px;
    }

    .fixed {
        position: fixed;
        top: 16px;
        width: 92%;
        z-index: 1;
    }

    .results {
        margin: 0 auto;
    }
</style>
