const keystone = require('keystone');
const getOrCreateTags = require('../tags/POST_tags.js');

module.exports = async function({description, tags, image}, user) {
    const {allowPostImages} = await keystone.config();
    if (!allowPostImages) {
        throw new Error('New submissions have been disabled by owner.');
    }

    keystone.isAuth(user);

    [tags] = keystone.castToArray(tags);

    keystone.truthy({image, tags});

    if (tags.length < 1) {
        throw new Error('You should provide at least one tag.');
    }

    const tagObjects = await getOrCreateTags({tags}, user);

    const createdPost = new (keystone.list('Post')).model({
        name: tags.slice(0, 6).join('-'),
        author: user,
        tags: tagObjects.map(t => t._id),
        description: {
            md: description
        }
    });

    await keystone.cbToPromise(createdPost._.image.upload, image);
    await createdPost.save();

    return keystone.format(createdPost);
};
