<template>
    <div class="section">
        <div class="container">
            <h1 class="title">
                Ajouter une image
            </h1>
            <form class="columns" @submit.prevent="submitPost">
                <div class="column">
                    <file-input v-model="image"></file-input>
                </div>
                <div class="column">
                    <div class="field">
                        <label class="label"> Tags (minimum 1) </label>
                        <tag-input :fetchSuggestions="fetchSuggestions"
                            v-model="tags" :includeOnly="true" :submitButton="false">
                        </tag-input>
                    </div>
                    <div class="field">
                        <label class="label"> Description (optionnel) </label>
                        <p class="control">
                            <textarea class="textarea"></textarea>
                        </p>
                    </div>
                    <div class="field">
                        <p class="has-text-centered">
                            <button type="submit" class="button is-primary is-large"
                                :disabled="!this.tags.length || !image"
                                :class="{'is-loading': loading}">
                                Ajouter
                            </button>
                        </p>
                    </div>
                    <div v-if="error" class="notification is-danger">
                        Quelque-chose s'est mal passé. Réessayez.
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import api from '../api/';
    import FileInput from '../components/forms/FileInput.vue';
    import TagInput from '../components/forms/TagInput.vue';

    export default {
        components: {
            FileInput,
            TagInput
        },
        data() {
            return {
                loading: false,
                error: null,
                tags: [],
                description: '',
                image: null
            };
        },
        computed: {
            isAuth() {
                return this.$store.state.auth.isAuth;
            },
            activeUser() {
                return this.$store.state.auth.activeUser;
            }
        },
        methods: {
            fetchSuggestions(input) {
                return api({
                    path: 'GET_tags-suggestion-$input',
                    params: { input }
                });
            },
            submitPost() {
                this.loading = true;
                this.error = null;
                let image = this.image;
                if (Array.isArray(image)) image = image[0];
                this.$store.dispatch('posts/SUBMIT_POST', {
                    tags: this.tags,
                    description: this.description,
                    image
                }).then(() => this.$router.push(`/tag/${this.tags[0].name}`))
                .catch(err => (this.error = err))
                .then(() => (this.loading = false));
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>
