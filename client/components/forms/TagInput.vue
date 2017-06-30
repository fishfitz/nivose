<template>
    <div class="field has-addons has-addons-centered">
        <div class="control is-expanded">
            <div @click="focusInput(tags.length)" class="input is-large vue-input-tag-wrapper">
                <template v-for="(tag, index) in tags">
                    <input type="text" class="cursor-only"
                        :style="{ width: tag.input.length + 'ch' }"
                        v-model="tag.input"
                        @input="displaySuggestions(index, tag.input)"
                        @keydown.delete.stop="removeKeyboard(index)"
                        @keydown.left.stop="moveCursorLeft(index)"
                        @keydown.right.stop="moveCursorRight(index)">
                    <span @click.stop="focusInput(index)" class="tag is-medium">
                        {{ tag.name }}
                        <button class="delete" @click.prevent.stop="removeClick(index)"></button>
                    </span>
                </template>
                <input type="text" class="new-tag"
                    v-bind:placeholder="placeholder"
                    v-model="newTag"
                    @input="displaySuggestions(tags.length, newTag)"
                    @keydown.delete.stop="removeKeyboard(tags.length)"
                    @keydown.left.prevent.stop="moveCursorLeft(tags.length)">
            </div>
            <auto-complete :show="showSuggestions"
                :suggestions="suggestions"
                :loading="loadingSuggestions"
                @select="onSelect">
            </auto-complete>
        </div>
        <div class="control">
            <button class="button is-primary is-large">
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

    export default {
        components: {
            AutoComplete
        },
        props: {
            tags: {
                type: Array,
                default() {
                    return [];
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            fetchSuggestions: {
                type: Function,
                required: true
            }
        },
        data() {
            return {
                activePosition: 0,
                newTag: '',
                showSuggestions: '',
                loadingSuggestions: '',
                suggestions: []
            };
        },
        methods: {
            findInput(index) {
                return this.$el.getElementsByTagName('input')[Math.min(index, this.tags.length)];
            },
            focusInput(index) {
                this.findInput(index).focus();
            },
            add(tagName, index) {
                tagName = tagName.trim();
                if (tagName && this.tags.findIndex(tag => tag.name === tagName) === -1) {
                    if (index === this.tags.length) {
                        this.newTag = '';
                        this.findInput(index).focus();
                    }
                    else {
                        this.tags[index].input = '';
                        this.$nextTick(() => this.findInput(index + 1).focus());
                    }
                    this.tags.splice(index, 0, {
                        name: tagName,
                        input: ''
                    });
                    this.$emit('change', this.tags);
                }
            },
            removeKeyboard(index) {
                const input = this.findInput(index);
                if (index > 0 && !input.selectionStart) {
                    this.$emit('remove', this.tags.splice(index - 1, 1));
                    this.$emit('change', this.tags);
                    this.$nextTick(() => this.findInput(index - 1).focus());
                }
            },
            removeClick(index) {
                this.$emit('remove', this.tags.splice(index, 1));
                this.$nextTick(() => this.findInput(index).focus());
            },
            moveCursorLeft(index) {
                if (index > 0 && !this.findInput(index).selectionStart) {
                    this.findInput(index - 1).focus();
                }
            },
            moveCursorRight(index) {
                const input = this.findInput(index);
                if (index < this.tags.length && input.selectionEnd === input.value.length) {
                    this.findInput(index + 1).focus();
                }
            },
            displaySuggestions(index, input) {
                this.activePosition = index;
                if (input.length) {
                    this.showSuggestions = true;
                    this.loadingSuggestions = true;
                    this.fetchSuggestions(input).then(suggestions => {
                        this.loadingSuggestions = false;
                        this.suggestions = suggestions.filter(s => {
                            return this.tags.findIndex(tag => tag.name === s.name) === -1;
                        });
                    });
                }
                else {
                    this.showSuggestions = false;
                    this.loadingSuggestions = false;
                }
            },
            onSelect(item) {
                this.add(item, this.activePosition);
                this.closeSuggestions();
            },
            closeSuggestions() {
                this.showSuggestions = false;
                this.loadingSuggestions = false;
                this.suggestions = [];
            }
        }
    };
</script>

<style lang="scss" scoped>
    .vue-input-tag-wrapper {
        cursor: text;
        -webkit-appearance: textfield;
    }

    .new-tag, .cursor-only {
        height: 100%;
        border: none;
        background-color: transparent;
    }

    .cursor-only {
        min-width: 1px;
    }

    .tag {
        margin-left: 5px;
        margin-right: 5px;
    }

    .vue-input-tag-wrapper.read-only {
        cursor: default;
    }

    input:focus {
        outline: none;
    }
</style>
