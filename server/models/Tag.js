const keystone = require('keystone');
const Types = keystone.Field.Types;

const Tag = new keystone.List('Tag', {
    autokey: {
        path: 'slug',
        from: 'name',
        unique: true
    }
});

Tag.add({
    name: {
        type: Types.Text,
        required: true,
        index: true
    },
    color: {
        type: Types.Color
    },
    description: {
        type: Types.Markdown
    }
});

Tag.register();
