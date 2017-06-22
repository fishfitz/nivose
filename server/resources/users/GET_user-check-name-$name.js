const keystone = require('keystone');
const utils = require('keystone-utils');

module.exports = async function({name}) {
    const user = await keystone.list('User').model.find({
        slug: utils.slug(name)
    }).exec();

    keystone.truthy({name});

    if (user) {
        throw new Error('Username already exist');
    }

    return {};
};
