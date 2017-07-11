<template>
    <div class="section">
        <post-large v-if="post.slug"
            :post="post" :isAuth="isAuth"
            @select="selectImage">
        </post-large>
        <image-overlay v-model="selectedImage"></image-overlay>
    </div>
</template>

<script>
    import PostLarge from '../components/PostLarge.vue';
    import ImageOverlay from '../components/modals/ImageOverlay.vue';

    export default {
        components: {
            PostLarge,
            ImageOverlay
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
            post() {
                return this.$store.state.posts.post;
            }
        },
        methods: {
            selectImage(image) {
                this.selectedImage = image;
            }
        },
        asyncData({store, route: { params: { postID } }}) {
            return store.dispatch('posts/FETCH_POST', {
                postID
            });
        }
    };
</script>
