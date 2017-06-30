<template>
    <section>
        <app-header></app-header>
        <div>
            <slot></slot>
        </div>
    </section>
</template>

<script>
    import AppHeader from './components/header/AppHeader.vue';

    export default {
        components: {
            AppHeader
        }
    };
</script>

<style lang="scss">
    @import "./styles/bulma.scss";
    @import "./styles/transitions.scss";
    @import "./styles/layout.scss";
    @import "./styles/forms.scss";
</style>
