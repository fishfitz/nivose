const keystone = require('keystone');
const Types = keystone.Field.Types;

const Tag = new keystone.List('Tag');

Tag.add({
    name: { type: Types.Text, required: true, index: true },
    color: { type: Types.Color },
    description: { type: Types.Markdown, default: '' },
    synonyms: { type: Types.TextArray, default: [], index: true }
});

Tag.schema.pre('save', function(next) {
    this.name = this.name.toLowerCase();
    this.synonyms = this.synonyms.map(s => s.toLowerCase());
    next();
});

Tag.relationship({ path: 'posts', ref: 'Post', refPath: 'tags' });

Tag.defaultColumns = 'name, color';

Tag.register();
