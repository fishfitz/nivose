<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-48x48">
                <img :src="user.avatar">
            </p>
        </figure>
        <form class="media-content" @submit.prevent="postComment">
            <div class="field">
                <p class="control">
                    <textarea class="textarea"
                        placeholder="Ajouter un commentaire"
                        v-model="content">
                    </textarea>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button"
                        type="submit"
                        :class="{'is-loading': loading}"
                        :disabled="!content">
                        Commenter
                    </button>
                    <div v-if="error" class="notification is-danger">
                        Quelque-chose s'est mal passé. Réessayez.
                    </div>
                </p>
            </div>
        </form>
    </article>
</template>

<script>
    export default {
        props: ['postID'],
        data() {
            return {
                loading: false,
                error: null,
                content: ''
            };
        },
        computed: {
            user() {
                return this.$store.state.auth.activeUser;
            }
        },
        methods: {
            postComment() {
                this.loading = true;
                this.error = null;
                this.$store.dispatch('posts/SUBMIT_COMMENT', {
                    postID: this.postID,
                    content: this.content
                }).then(() => (this.content = ''))
                .catch(err => (this.error = err))
                .then(() => (this.loading = false));
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../styles/variables.scss";

    .is-48x48 img {
        border-radius: $radius;
    }
</style>
