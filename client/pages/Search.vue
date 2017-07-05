<template>
    <div class="section">
        <section class="hero is-large">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <tag-input :fetchSuggestions="fetchSuggestions"
                        v-model="tags"
                        @submit="searchPosts">
                    </tag-input>
                </div>
            </div>
        </section>
        <div v-if="results" v-masonry transition-duration="0.1s" item-selector="result">
            <div v-masonry-tile class="result" v-for="result in results">
                <img :src="result.image">
            </div>
        </div>
    </div>
</template>

<script>
    import TagInput from '../components/forms/TagInput.vue';
    import api from '../api/';

    export default {
        components: {
            TagInput
        },
        data() {
            return {
                tags: [],
                loading: false
            };
        },
        computed: {
            results() {
                return this.$store.state.posts.posts;
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
                this.loading = true;
                this.$store.dispatch('posts/SEARCH_POSTS', {
                    tags
                }).then(() => (this.loading = false));
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

    }
</style>
