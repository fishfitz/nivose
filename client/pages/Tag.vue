<template>
    <div class="section">
        <scroll-top @reach="loadTop"
            :loading="loadingTop" class="scroll-top">
        </scroll-top>

        <div class="container">
            <scroll-spy v-model="topPost">
                <post-large v-for="post in posts"
                    :post="post" :key="post.slug" :isAuth="isAuth"
                    class="post-large"
                    @select="selectImage">
                </post-large>
            </scroll-spy>

            <div v-if="blockBottom || !posts.length" class="box columns has-text-centered">
                <p class="column title"> Pas d'autres images à afficher. </p>
            </div>
        </div>

        <div class="modal is-active is-fullwidth" v-if="selectedImage" @click="selectedImage = null">
            <div class="modal-background"></div>
            <div class="modal-content">
                <p class="image selected-image">
                    <img :src="selectedImage">
                </p>
            </div>
        </div>

        <scroll-bottom @reach="loadBottom"
            :block="blockBottom || !posts.length"
            :loading="loadingBottom">
        </scroll-bottom>
    </div>
</template>

<script>
    import ScrollSpy from '../components/ScrollSpy.vue';
    import ScrollTop from '../components/ScrollTop.vue';
    import ScrollBottom from '../components/ScrollBottom.vue';
    import PostLarge from '../components/PostLarge.vue';

    export default {
        components: {
            ScrollSpy,
            ScrollTop,
            ScrollBottom,
            PostLarge
        },
        data() {
            return {
                selectedImage: null,
                loadingTop: false,
                loadingBottom: false,
                blockBottom: false,
                topPost: 0
            };
        },
        computed: {
            isAuth() {
                return this.$store.state.auth.isAuth;
            },
            tag() {
                return this.$route.params.tagID;
            },
            posts() {
                return this.$store.state.posts.posts;
            },
            page() {
                return this.$route.params.page;
            }
        },
        methods: {
            selectImage(image) {
                this.selectedImage = image;
            },
            findPost(index) {
                return this.$el.getElementsByClassName('post-large')[index];
            },
            loadBottom() {
                this.loadingBottom = true;
                return this.$store.dispatch('posts/SEARCH_POSTS', {
                    tags: [{ name: this.tag, include: true }],
                    reference: this.posts[this.posts.length - 1].posted_at,
                    excludeID: this.posts[this.posts.length - 1].slug
                }).then(posts => {
                    this.blockBottom = !posts.length;
                    this.$nextTick(() => (this.loadingBottom = false));
                });
            },
            loadTop() {
                this.loadingTop = true;
                const currentPost = this.findPost(0);
                return this.$store.dispatch('posts/SEARCH_POSTS', {
                    tags: [{ name: this.tag, include: true }],
                    reference: this.posts[0].posted_at,
                    excludeID: this.posts[0].slug,
                    after: false
                }).then(posts => {
                    currentPost.scrollIntoView();
                    document.body.scrollTop -= 88;
                    this.$nextTick(() => (this.loadingTop = false));
                });
            }
        },
        watch: {
            topPost(index) {
                this.$router.replace({
                    name: 'tag',
                    params: { tagID: this.tag, reference: this.posts[index].posted_at }
                });
            }
        },
        mounted() {
            window.scrollTo(0, 0);
        },
        asyncData({store, route: { params: { tagID, reference } }}) {
            return store.dispatch('posts/SEARCH_POSTS', {
                tags: [{ name: tagID, include: true }],
                replace: true,
                reference
            });
        }
    };
</script>

<style lang="scss" scoped>
    .modal-content {
        max-height: none;
        cursor: pointer;

        p {
            text-align: center;

            img {
                display: inline-block;
                width: auto;
                height: auto;
                max-height: 100%;
            }
        }
    }

    .scroll-top {
        position: absolute;
        top: 55px;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>
