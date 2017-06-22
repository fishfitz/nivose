const keystone = require('keystone');
const getOrCreateTags = require('../tags/POST_tags.js');

module.exports = async function({name, description, tags, image}, user) {
    const {allowPostImages} = await keystone.config();
    if (!allowPostImages) {
        throw new Error('New submissions have been disabled by owner.');
    }

    keystone.isAuth(user);
    keystone.truthy({name, image});

    const tagObjects = await getOrCreateTags({tags});

    const createdPost = new (keystone.list('Post')).model({
        name,
        description,
        image,
        author: user,
        tags: tagObjects.map(t => t._id)
    });

    await createdPost.save();

    return keystone.format(createdPost);
};
