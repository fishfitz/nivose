<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import debounce from 'debounce';
    export default {
        props: ['value'],
        mounted() {
            window.addEventListener('scroll', this.listen);
        },
        destroyed() {
            window.removeEventListener('scroll', this.listen);
        },
        methods: {
            listen: debounce(function(event) {
                if (!this.$slots.default.length) return;
                const pos = document.body.scrollTop;
                const index = this.closestIndex(pos, this.$slots.default.map(e => e.elm.offsetTop));
                if (index !== this.value) {
                    this.$emit('input', index);
                }
            }, 500),
            closestIndex(value, array) {
                let low = 0;
                let high = array.length - 1;
                while (low < high) {
                    let mid = (low + high) / 2 | 0;
                    let d1 = Math.abs(array[mid] - value);
                    let d2 = Math.abs(array[mid + 1] - value);
                    if (d2 <= d1) low = mid + 1;
                    else high = mid;
                }
                return high;
            }
        }
    };
</script>
