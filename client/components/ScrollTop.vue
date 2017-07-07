<template>
    <div class="has-text-centered">
        <aw-icon v-if="loading" name="spinner" scale="2" spin></aw-icon>
    </div>
</template>

<script>
    import 'vue-awesome/icons/spinner';

    export default {
        props: ['loading', 'block'],
        data() {
            return {
                lastScroll: 0
            };
        },
        mounted() {
            window.addEventListener('scroll', this.listen);
            window.addEventListener('wheel', this.listen);
        },
        destroyed() {
            window.removeEventListener('scroll', this.listen);
            window.addEventListener('wheel', this.listen);
        },
        methods: {
            reachTop() {
                return !document.body.scrollTop;
            },
            listen(event) {
                if (this.loading) return;
                if (!this.block && this.reachTop()) {
                    let top = false;
                    if (event.deltaY < 0) {
                        top = true;
                    }
                    else if (!event.deltaY) {
                        if (this.lastScroll - document.body.scrollTop < 0) {
                            top = true;
                        }
                    }
                    if (top) this.$emit('reach');
                }
                if (!event.deltaY) {
                    this.lastScroll = document.body.scrollTop;
                }
            }
        }
    };
</script>
