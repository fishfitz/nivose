<template>
    <div class="columns box">
        <div class="column">
            <img :src="post.image" class="displayed-image" @click="$emit('select', post.image)">
            <div>
                <span v-for="tag in post.tags">
                    <aw-icon name="hashtag" scale="0.7"></aw-icon>
                    {{ tag.name }}
                </span>
            </div>
        </div>

        <div class="column">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img :src="post.author.avatar">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <div>
                            Posté par :
                            <strong>{{ post.author.name }}</strong>
                            <br>
                            <small>
                                {{ post.posted_at | formatDate }}
                            </small>
                            <p class="content" v-if="post.description">
                                <span v-html="post.description.html"></span>
                            </p>
                            <button v-if="canEdit && !showRemove"
                                class="delete delete-top"
                                @click="showRemove = true">
                            </button>
                            <div v-if="showRemove" class="notification is-danger">
                                Supprimer cette image ?
                                Cette action n'est <b>pas</b> réversible.
                                <div class="has-text-right">
                                    <button class="button is-small is-danger is-inverted"
                                        @click="removePost">
                                        Confirmer
                                    </button>
                                    <button class="button is-small is-white"
                                        @click="showRemove = false">
                                        Annuler
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <comment v-for="c in post.comments"
                :key="c._id"
                :comment="c"
                :postID="post.slug">
            </comment>

            <post-comment v-if="isAuth" :postID="post.slug"></post-comment>
        </div>
    </div>
</template>

<script>
    import PostComment from './forms/PostComment.vue';
    import Comment from './Comment.vue';
    import formatDate from '../libs/formatDate';
    import 'vue-awesome/icons/hashtag';

    export default {
        components: {
            PostComment,
            Comment
        },
        props: ['post', 'isAuth'],
        data() {
            return {
                showRemove: false
            };
        },
        computed: {
            canEdit() {
                return this.$store.state.auth.activeUser.slug === this.post.author.slug ||
                    this.$store.state.auth.isAdmin;
            }
        },
        filters: {
            formatDate
        },
        methods: {
            removePost() {
                this.$store.dispatch('posts/DELETE_POST', {
                    postID: this.post.slug
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

    .box {
        margin-bottom: 30px;
    }

    .displayed-image {
        max-height: 500px;
        width: auto;
        cursor: pointer;
    }
</style>
