const keystone = require('keystone');

module.exports = async function({tags}, user) {
    keystone.isAuth(user);
    
    [tags] = keystone.castToArray(tags);
    const tagObjects = await keystone.findTags(tags);
    const tagNames = tagObjects.map(t => t.name);

    const tagsToCreate = tags.filter(t => tagNames.indexOf(t.toLowerCase()) === -1);
    if (tagsToCreate.length) {
        await Promise.all(tagsToCreate.map(async t => {
            let createdTag = new (keystone.list('Tag')).model({
                name: t
            });
            await createdTag.save();
            tagObjects.push(createdTag._id);
        }));
    }

    return tagObjects;
};
