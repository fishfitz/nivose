<template>
    <div class="modal is-active is-fullwidth" v-if="value" @click="$emit('input', null)">
        <div class="modal-background"></div>
        <div class="modal-content">
            <p class="image selected-image">
                <img :src="value">
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value']
    };
</script>

<style lang="scss" scoped>
    .modal-content {
        max-height: none;
        cursor: pointer;

        p {
            text-align: center;

            img {
                display: inline-block;
                width: auto;
                height: auto;
                max-height: 100%;
            }
        }
    }
</style>
