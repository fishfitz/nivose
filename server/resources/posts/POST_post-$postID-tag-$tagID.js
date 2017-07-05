const keystone = require('keystone');
const getOrCreateTags = require('../tags/POST_tags.js');

module.exports = async function({postID, tagID}, user) {
    keystone.isAuth(user);

    const requestedPost = await keystone.request('Post', postID);
    const tag = await getOrCreateTags({tags: [tagID]}, user);

    if (requestedPost.tags.some(t => t._id.equals(tag[0]._id))) {
        throw new Error('Post already have the tag ' + tag[0].name);
    }

    requestedPost.push(tag[0]._id);
    await requestedPost.save();

    return {};
};
