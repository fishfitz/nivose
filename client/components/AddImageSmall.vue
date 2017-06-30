<template>
    <el-button type="primary" v-if="isAuth">
        <template>
            <span class="xs-hide sm-hide">
                Ajouter une image
            </span>
            <aw-icon name="upload"></aw-icon>
        </template>
    </el-button>
</template>

<script>
    import 'vue-awesome/icons/upload';
</script>

<style lang="scss" scoped>
    .add-image {
        text-align: right;

        span {
            vertical-align: text-top;
            margin-right: 2px;
        }
    }
</style>
