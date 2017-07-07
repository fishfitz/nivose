<template>
    <div class="has-text-centered">
        <aw-icon v-if="loading" name="spinner" scale="2" spin></aw-icon>
    </div>
</template>

<script>
    import 'vue-awesome/icons/spinner';

    export default {
        props: ['loading', 'block'],
        mounted() {
            window.addEventListener('scroll', this.listen);
            window.addEventListener('wheel', this.listen);
        },
        destroyed() {
            window.removeEventListener('scroll', this.listen);
            window.addEventListener('wheel', this.listen);
        },
        methods: {
            reachBottom() {
                return ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 10);
            },
            listen(event) {
                if (this.loading) return;
                if (!this.block && this.reachBottom()) {
                    this.$emit('reach');
                }
            }
        }
    };
</script>
