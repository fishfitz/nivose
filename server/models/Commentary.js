const keystone = require('keystone');
const Types = keystone.Field.Types;

const Commentary = new keystone.List('Commentary');

Commentary.add({
    content: {
        type: Types.Markdown,
        required: true,
        initial: true
    },
    author: {
        type: Types.Relationship,
        ref: 'User'
    },
    posted_at: {
        type: Types.Date,
        readOnly: true,
        index: true
    }
});

Commentary.schema.pre('save', function(next) {
    if (!this.posted_at) {
        this.posted_at = new Date();
    }
    next();
});

Commentary.register();