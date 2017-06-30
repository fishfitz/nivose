<template>
    <modal :show="value" @close="$emit('input', false)">
        <h1 slot="header" class="modal-card-title">
            Changer son avatar
        </h1>
        <div>
            <label>
                Cliquer ou déposer une image ici
                <input type="file" accept="image/*"
                    @change="changeAvatar($event.target.files[0])">
            </label>
        </div>
        <div slot="footer">
            <progress v-if="loading" class="progress" :value="progress" max="100">
                {{ progress }}%
            </progress>
            <div v-else-if="error" class="notification is-danger">
                Quelque-chose s'est mal passé. Réessayez.
            </div>
        </div>
    </modal>
</template>

<script>
    import Modal from './Modal.vue';

    export default {
        components: {
            Modal
        },
        props: ['value'],
        data() {
            return {
                loading: false,
                error: null,
                progress: 0
            };
        },
        methods: {
            changeAvatar(file) {
                if (Array.isArray(file)) file = file[0];
                if (!file) return;
                const data = new window.FormData();
                data.append('avatar', file);
                this.loading = true;
                this.$store.dispatch('users/MODIFY_USER', {
                    data,
                    slug: this.$route.params.userID,
                    config: {
                        onUploadProgress: progressEvent => {
                            console.log(progressEvent);
                            this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        }
                    }
                }).then(() => this.$emit('input', false))
                .catch(err => (this.error = err))
                .then(() => (this.loading = false));
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../styles/variables.scss";

    label {
        display: block;
        height: 150px;
        line-height: 150px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: $grey-light;
        border: 1px dashed $grey-light;
        border-radius: 5px;
        cursor: pointer;
        transition: border-color $speed $easing, color $speed $easing;

        &:hover {
            color: $grey-dark;
            border-color: $grey-dark;
        }
    }

    input {
        position: absolute;
        width: 0;
        visibility: hidden;
    }
</style>
