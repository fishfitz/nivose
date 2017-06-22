const keystone = require('keystone');
// const Types = keystone.Field.Types;

const Config = new keystone.List('Config');

Config.add({
    name: { type: String, required: true, initial: true },
    isActive: { type: Boolean, default: false },
    maxPageSize: { type: Number, default: 50 },
    maxRequestTags: { type: Number, default: 15 },
    allowNewMemberSignUp: { type: Boolean, default: true },
    allowPostImages: { type: Boolean, default: true }
});

Config.schema.pre('save', async function(next) {
    if (this.isActive) {
        const lastActiveConfig = await keystone.config(true);
        if (lastActiveConfig) {
            lastActiveConfig.isActive = false;
            await lastActiveConfig.save();
        }
    }
    next();
});

Config.defaultColumns = 'name, isActive';

Config.register();
