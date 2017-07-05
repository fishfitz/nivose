<template>
    <div class="section">
        <div class="container">
            <post-large v-for="post in posts"
                :post="post" :key="post.slug" :isAuth="isAuth"
                @select="selectImage">
            </post-large>
        </div>

        <div class="modal is-active is-fullwidth" v-if="selectedImage" @click="selectedImage = null">
            <div class="modal-background"></div>
            <div class="modal-content">
                <p class="image selected-image">
                    <img :src="selectedImage">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import PostLarge from '../components/PostLarge.vue';

    export default {
        components: {
            PostLarge
        },
        data() {
            return {
                selectedImage: null
            };
        },
        computed: {
            isAuth() {
                return this.$store.state.auth.isAuth;
            },
            posts() {
                return this.$store.state.posts.posts;
            }
        },
        methods: {
            selectImage(image) {
                this.selectedImage = image;
            }
        },
        asyncData({store, route: { params: { tagID } }}) {
            return store.dispatch('posts/SEARCH_POSTS', {
                tags: [{name: tagID, include: true}],
                pageSize: 5,
                page: 1,
                replace: true
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
</style>
