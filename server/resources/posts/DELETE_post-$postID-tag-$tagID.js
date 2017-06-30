const keystone = require('keystone');

module.exports = async function({postID, tagID}, user) {
    keystone.isAuth(user);

    const requestedPost = await keystone.request('Post', postID);

    if (!requestedPost.author.equals(user._id) && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right to remove tags from this post.');
    }

    const tag = await keystone.findTags([tagID]);

    if (!tag[0]) {
        throw new Error(tagID + ' does not exist.');
    }

    const index = requestedPost.tags.findIndex(t => t._id.equals(tag[0]._id));

    if (index === -1) {
        throw new Error(`This post don't have the tag ${tag[0].name}.`);
    }

    requestedPost.splice(index, 1);
    await requestedPost.save();

    return {};
};
