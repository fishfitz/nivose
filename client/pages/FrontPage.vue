<template>
    <div>
        <section class="hero is-medium is-bold is-light">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Chiboard
                    </h1>
                    <h2 class="subtitle">
                        Ici du contenu sympa
                    </h2>
                </div>
            </div>
        </section>
        <!--
        <tag-input :fetchSuggestions="fetchSuggestions"></tag-input>
    -->
    </div>
</template>
<!--
<script>
    import TagInput from '../components/forms/TagInput.vue';
    import api from '../api/';

    export default {
        components: {
            TagInput
        },
        computed: {
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
            }
        }
    };
</script>
-->
