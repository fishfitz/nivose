const keystone = require('keystone');

async function requestOne(model, slug, prop) {
    const item = await keystone.list(model).model.findOne({
        [prop]: slug
    }).exec();
    if (!item) {
        throw new Error(`No ${model} with the ${prop} ${slug} found.`);
    }
    return item;
}

async function requestMultiple(model, slugs, prop) {
    const items = await keystone.list(model).model.find()
    .where(prop).in(slugs).exec();
    return items;
}

module.exports = async function(model, slug, prop = 'slug') {
    if (Array.isArray(slug)) {
        return await requestMultiple(model, slug, prop);
    }
    else {
        return await requestOne(model, slug, prop);
    }
};
