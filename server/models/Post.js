const keystone = require('keystone');
const Types = keystone.Field.Types;

const Post = new keystone.List('Post', {
    autokey: {
        path: 'slug',
        from: 'name',
        unique: true
    }
});

Post.add({
    name: {
        type: Types.Text,
        required: true,
        index: true
    },
    description: {
        type: Types.Markdown
    },
    posted_at: {
        type: Types.Date,
        readOnly: true,
        index: true
    },
    image: {
        type: Types.File,
        storage: new keystone.Storage({
            adapter: keystone.Storage.Adapters.FS,
            fs: {
                path: '/public/image',
                publicPath: '/images/'
            }
        })
    },
    author: {
        type: Types.Relationship,
        ref: 'User'
    },
    tags: {
        type: Types.Relationship,
        ref: 'Tag',
        many: true,
        index: true
    },
    comments: {
        type: Types.Relationship,
        ref: 'Commentary',
        many: true
    },
    upVotes: {
        type: Types.Relationship,
        ref: 'User',
        many: true
    }
});

Post.schema.pre('save', function(next) {
    if (!this.posted_at) {
        this.posted_at = new Date();
    }
    next();
});

Post.register();
