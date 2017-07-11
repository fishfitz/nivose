<template>
    <div class="field has-addons has-addons-centered">
        <div @keydown.enter="doSubmitIfNoSuggestion" class="control is-expanded">
            <div @click="focusInput(value.length); displaySuggestions(value.length, newTag);"
                class="input is-large vue-input-tag-wrapper"
                :class="{'is-focused': focus}">
                <span v-for="(tag, index) in value" class="unbreakable"
                    @click.stop="focusInput(index)">
                    <input type="text" class="cursor-only"
                        :style="{ width: tag.input.length + 'ch' }"
                        v-model="tag.input"
                        @click="displaySuggestions(index, tag.input)"
                        @input="displaySuggestions(index, tag.input)"
                        @keydown.8.stop="removeKeyboardBack(index)"
                        @keydown.46.stop="removeKeyboardDelete(index)"
                        @keydown.left="moveCursorLeft(index)"
                        @keydown.right="moveCursorRight(index)">
                    <span class="tag is-medium">
                        <button v-if="!includeOnly"
                            class="button is-small tag-button is-outlined"
                            :class="{'is-danger': !tag.include}"
                            @click.stop="tag.include = !tag.include">
                            <span class="icon">
                                <aw-icon :name="tag.include ? 'plus' : 'minus'"></aw-icon>
                            </span>
                        </button>
                        </button>
                        {{ tag.name }}
                        <button class="delete" @click.prevent.stop="removeClick(index)"></button>
                    </span>
                </span>
                <input type="text" class="new-tag"
                    v-bind:placeholder="placeholder"
                    v-model="newTag"
                    @input="displaySuggestions(value.length, newTag)"
                    @click="displaySuggestions(value.length, newTag)"
                    @keydown.8.stop="removeKeyboardBack(value.length)"
                    @keydown.left="moveCursorLeft(value.length)">
            </div>
            <auto-complete :show="showSuggestions"
                :suggestions="suggestions"
                :loading="loadingSuggestions"
                :include="include"
                :includeOnly="includeOnly"
                @include="switchInclude"
                @close="showSuggestions = false"
                @select="onSelect">
            </auto-complete>
        </div>
        <div class="control" v-if="submitButton">
            <button class="button is-primary is-large" @click="doSubmit">
                <span class="icon is-small is-right">
                    <aw-icon name="search" scale="1.5"></aw-icon>
                </span>
            </button>
        </div>
    </div>
</template>

<script>
    import AutoComplete from './AutoComplete.vue';
    import 'vue-awesome/icons/search';
    import 'vue-awesome/icons/minus';

    export default {
        components: {
            AutoComplete
        },
        props: {
            value: {
                type: Array,
                default: []
            },
            placeholder: {
                type: String,
                default: ''
            },
            fetchSuggestions: {
                type: Function,
                required: true
            },
            submitButton: {
                type: Boolean,
                default: true
            },
            includeOnly: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                tags: [],
                include: true,
                activePosition: 0,
                newTag: '',
                showSuggestions: '',
                loadingSuggestions: '',
                suggestions: [],
                focus: false
            };
        },
        methods: {
            findInput(index) {
                return this.$el.getElementsByTagName('input')[Math.min(index, this.value.length)];
            },
            focusInput(index) {
                this.findInput(index).focus();
            },
            add({name, include}, index) {
                if (name && this.value.findIndex(tag => tag.name === name) === -1) {
                    if (index === this.value.length) {
                        this.newTag = '';
                        this.findInput(index).focus();
                    }
                    else {
                        this.value[index].input = '';
                        this.$nextTick(() => this.findInput(index + 1).focus());
                    }
                    this.$emit('input', [...this.value.slice(0, index), {
                        name,
                        include,
                        input: ''
                    }, ...this.value.slice(index, this.value.length)]);
                }
            },
            removeKeyboardBack(index) {
                const input = this.findInput(index);
                if (index > 0 && !input.selectionStart) {
                    this.$emit('input', [
                        ...this.value.slice(0, index - 1),
                        ...this.value.slice(index, this.value.length)]);
                    this.$nextTick(() => this.findInput(index - 1).focus());
                }
            },
            removeKeyboardDelete(index) {
                const input = this.findInput(index);
                if (input.selectionStart === input.value.length) {
                    this.$emit('input', [
                        ...this.value.slice(0, index),
                        ...this.value.slice(index + 1, this.value.length)]);
                    this.$nextTick(() => this.findInput(index).focus());
                }
            },
            removeClick(index) {
                this.$emit('input', [
                    ...this.value.slice(0, index),
                    ...this.value.slice(index + 1, this.value.length)]);
                this.$nextTick(() => this.findInput(index).focus());
            },
            moveCursorLeft(index) {
                if (index > 0 && !this.findInput(index).selectionStart) {
                    this.findInput(index - 1).focus();
                }
            },
            moveCursorRight(index) {
                const input = this.findInput(index);
                if (index < this.value.length && input.selectionEnd === input.value.length) {
                    this.findInput(index + 1).focus();
                }
            },
            displaySuggestions(index, input) {
                this.activePosition = index;
                if (this.includeOnly) {
                    input = input.replace(/-/g, '');
                }
                if (input.length > 1 || input.length === 1 && input[0] !== '-') {
                    this.include = input[0] !== '-';
                    if (!this.include) {
                        input = input.replace('-', '');
                    }
                    this.showSuggestions = true;
                    this.loadingSuggestions = true;
                    this.fetchSuggestions(input).then(suggestions => {
                        this.loadingSuggestions = false;
                        this.suggestions = suggestions.filter(s => {
                            return this.value.findIndex(tag => tag.name === s.name) === -1;
                        });
                    });
                }
                else {
                    this.showSuggestions = false;
                    this.loadingSuggestions = false;
                }
            },
            onSelect(tag) {
                this.add(tag, this.activePosition);
                this.closeSuggestions();
            },
            closeSuggestions() {
                this.showSuggestions = false;
                this.loadingSuggestions = false;
                this.suggestions = [];
            },
            switchInclude(include) {
                this.include = include;
            },
            doSubmitIfNoSuggestion() {
                if (this.showSuggestions) return;
                this.doSubmit();
            },
            doSubmit() {
                if (!this.value.length) return;
                this.closeSuggestions();
                this.focus = false;
                this.$emit('submit', this.value);
            },
            listenClickOutside(event) {
                if (!this.$el.contains(event.target)) {
                    this.showSuggestions = false;
                    this.loadingSuggestions = false;
                    this.focus = false;
                }
                else {
                    this.focus = true;
                }
            }
        },
        mounted() {
            document.addEventListener('click', this.listenClickOutside);
        },
        destroyed() {
            document.removeEventListener('click', this.listenClickOutside);
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../styles/variables.scss";

    .vue-input-tag-wrapper {
        cursor: text;
    }

    .new-tag, .cursor-only {
        border: none;
        background-color: transparent;
    }

    .unbreakable {
        display: flex;
        align-items: stretch;
    }

    .cursor-only {
        min-width: 2px;
    }

    .tag {
        margin-left: 5px;
        margin-right: 5px;
    }

    .tag-button {
        border-radius: 50%!important;
        margin-right: 5px;

        &:focus, {
            border-color: inherit;
            box-shadow: none;
        }
    }

    .vue-input-tag-wrapper.read-only {
        cursor: default;
    }

    .input {
        flex-flow: wrap;
        height: auto;
        min-height: 2.25em;
    }

    input:focus {
        outline: none;
    }
</style>
