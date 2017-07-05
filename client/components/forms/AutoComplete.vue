<template>
    <ul class="autocomplete field" v-show="show">
        <li v-if="loading" class="is-loading has-text-centered">
            <aw-icon name="spinner" spin></aw-icon>
        </li>
        <li v-else-if="!suggestions.length"> Aucun tag trouvé. </li>
        <li v-else v-for="(item, index) in suggestions"
            @click="select(item, true)"
            :class="{selected: index === selectedIndex}">
            {{ item.name }}
            <button v-if="!includeOnly"
                class="button is-pulled-right is-danger"
                @click.stop="select(item, false)"
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
        props: ['show', 'suggestions', 'loading', 'include', 'includeOnly'],
        data() {
            return {
                selectedIndex: 0
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
                    case KEY.RIGHT:
                        this.$emit('include', !this.include);
                        break;
                    case KEY.DOWN:
                        this.decrement();
                        break;
                    case KEY.UP:
                        this.increment();
                        break;
                    case KEY.TAB:
                    case KEY.ENTER:
                        this.select(this.suggestions[this.selectedIndex], this.include || this.includeOnly);
                        break;
                }
                event.preventDefault();
            },
            select(item, include) {
                this.$emit('select', {
                    name: item.name,
                    include: this.include && include
                });
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
        margin-left: 0;
        position: absolute;
        margin-top: -1px;
        width: 100%;
        border: 1px solid $grey-light;
        border-bottom-left-radius: $radius;
        border-bottom-right-radius: $radius;
        z-index: 1;
        background-color: $white;
    }

    li {
        display: block;
        height: 40px;
        line-height: 40px;
        margin: 0!important;
        padding-left: 30px;
        padding-right: 30px;
        cursor: pointer;
        transition: background-color $speed $easing;

        &.selected, &:hover {
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
