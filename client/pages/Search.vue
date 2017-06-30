<template>
    <section class="hero is-large">
        <div class="hero-body has-text-centered">
            <div class="container">
                <tag-input :fetchSuggestions="fetchSuggestions"></tag-input>
            </div>
        </div>
    </section>
</template>

<script>
    import TagInput from '../components/forms/TagInput.vue';
    import api from '../api/';

    export default {
        components: {
            TagInput
        },
        computed: {
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

<style lang="scss" scoped>
    .limit-width {
        max-width: 600px;
        display: inline-block;
    }
</style>
