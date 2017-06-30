<template>
    <ul class="autocomplete field" v-show="show">
        <li v-if="loading" class="is-loading has-text-centered">
            <aw-icon name="spinner" spin></aw-icon>
        </li>
        <li v-else-if="!suggestions.length"> Aucun tag trouvé. </li>
        <li v-else v-for="(item, index) in suggestions"
            @click="select(item)"
            :class="{selected: index === selectedIndex}">
            {{ item.name }}
            <button class="button is-pulled-right is-danger"
                :class="{'is-outlined': (index !== selectedIndex) || include}">
                <span class="icon">
                    <aw-icon name="minus"></aw-icon>
                </span>
            </button>
        </li>
    </ul>
</template>

<script>
    import KEY from '../../plugins/key-codes';
    import 'vue-awesome/icons/spinner';
    import 'vue-awesome/icons/plus';
    import 'vue-awesome/icons/minus';

    const listenedKeys = [KEY.UP, KEY.DOWN, KEY.LEFT, KEY.RIGHT, KEY.ENTER, KEY.TAB];

    export default {
        props: ['show', 'suggestions', 'loading'],
        data() {
            return {
                selectedIndex: 0,
                include: true
            };
        },
        methods: {
            increment() {
                this.selectedIndex = (this.selectedIndex + 1) % this.suggestions.length;
            },
            decrement() {
                const m = this.suggestions.length;
                this.selectedIndex = ((this.selectedIndex - 1 % m) + m) % m;
            },
            listenKeyboard(event) {
                if (listenedKeys.indexOf(event.keyCode) === -1) return;
                switch (event.keyCode) {
                    case KEY.LEFT:
                        this.include = true;
                    case KEY.DOWN:
                        this.decrement();
                    case KEY.UP:
                        this.increment();
                    case KEY.RIGHT:
                        this.include = false;
                    case KEY.TAB:
                    case KEY.ENTER:
                        this.select(this.suggestions[this.selectedIndex]);
                }
                event.preventDefault();
            },
            select(item) {
                this.$emit('select', item.name);
                this.selectedIndex = 0;
            }
        },
        watch: {
            show(value) {
                if (value) {
                    document.addEventListener('keydown', this.listenKeyboard);
                }
                else {
                    document.removeEventListener('keydown', this.listenKeyboard);
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../styles/variables.scss";

    ul {
        position: absolute;
        margin-top: -1px;
        width: 100%;
        border: 1px solid $grey-light;
        border-bottom-left-radius: $radius;
        border-bottom-right-radius: $radius;
    }

    li {
        height: 40px;
        line-height: 40px;
        padding-left: 30px;
        padding-right: 30px;

        &.selected {
            background-color: $grey-lighter;
        }
    }

    .button {
        margin-top: 2px;
        border-radius: $radius-large!important;

        &.is-outlined {
            opacity: 0.8;
        }
    }
</style>
