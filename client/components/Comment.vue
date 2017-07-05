<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-32x32">
                <img :src="comment.author.avatar">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <strong>{{ comment.author.name }}</strong>
                <small>
                    {{ comment.posted_at | formatDate }}
                </small>
                <div class="content">
                    <span v-html="comment.content.html.trim()"></span>
                </div>
                <button v-if="canEdit"
                    class="delete delete-top"
                    @click="removeComment">
                </button>
            </div>
        </div>
    </article>
</template>

<script>
    import formatDate from '../libs/formatDate';

    export default {
        props: ['postID', 'comment'],
        computed: {
            canEdit() {
                return this.$store.state.auth.activeUser.slug === this.comment.author.slug ||
                    this.$store.state.auth.isAdmin;
            }
        },
        filters: {
            formatDate
        },
        methods: {
            removeComment() {
                this.$store.dispatch('posts/DELETE_COMMENT', {
                    postID: this.postID,
                    commentID: this.comment._id
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/variables.scss";

    .media-left .image img {
        border-radius: $radius;
    }
</style>

<style lang="scss" scoped>
</style>
