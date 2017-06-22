const keystone = require('keystone');
const getOrCreateTags = require('../tags/POST_tags.js');

module.exports = async function({postID, tagID}, user) {
    keystone.isAuth(user);

    const requestedPost = await keystone.request('Post', postID);
    const tag = await getOrCreateTags({tags: [tagID]});
    const index = requestedPost.tags.findIndex(t => t._id.equals(tag[0]._id));

    if (index === -1) {
        throw new Error('Post don\'t have the tag ' + tag[0].name);
    }

    requestedPost.splice(index, 1);
    await requestedPost.save();

    return {};
};
