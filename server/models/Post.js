const keystone = require('keystone');
const Types = keystone.Field.Types;

const Post = new keystone.List('Post', {
    autokey: { path: 'slug', from: 'name', unique: true }
});

Post.add({
    name: { type: Types.Text, required: true, index: true },
    description: { type: Types.Markdown, default: '' },
    posted_at: { type: Types.Datetime, readOnly: true, index: true },
    author: { type: Types.Relationship, ref: 'User' },
    tags: { type: Types.Relationship, ref: 'Tag', many: true, index: true },
    comments: { type: Types.Relationship, ref: 'Commentary', many: true },
    commentsNumber: { type: Number, default: 0, index: true },
    favoritesNumber: { type: Number, default: 0, index: true },
    image: {
        type: Types.File,
        storage: new keystone.Storage({
            adapter: keystone.Storage.Adapters.FS,
            fs: {
                path: 'upload/images',
                publicPath: '/images/'
            }
        })
    }
});

Post.schema.pre('save', function(next) {
    if (!this.posted_at) {
        this.posted_at = new Date();
    }
    this.commentsNumber = this.comments.length;
    next();
});

Post.relationship({ path: 'favorites', ref: 'User', refPath: 'favorites' });

Post.defaultColumns = 'name, author, posted_at, tags';

Post.register();
