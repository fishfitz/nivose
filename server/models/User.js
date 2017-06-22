const keystone = require('keystone');
const Types = keystone.Field.Types;

const User = new keystone.List('User', {
    autokey: { path: 'slug', from: 'name', unique: true }
});

User.add({
    name: { type: Types.Text, required: true, index: true },
    email: { type: Types.Email, initial: true, required: true, index: true },
    password: { type: Types.Password, initial: true },
    canAccessKeystone: { type: Boolean, initial: false },
    posts: { type: Types.Relationship, ref: 'Post', many: true },
    favorites: { type: Types.Relationship, ref: 'Post', many: true },
    description: { type: Types.Markdown },
    registered_at: { type: Types.Date, readOnly: true }
});

User.schema.pre('save', function(next) {
    if (!this.registered_at) {
        this.registered_at = new Date();
    }
    next();
});

User.relationship({ path: 'posts', ref: 'Post', refPath: 'author' });

User.defaultColumns = 'name, email, registered_at, canAccessKeystone';

User.register();
