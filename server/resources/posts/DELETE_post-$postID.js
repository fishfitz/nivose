const fs = require('fs');
const keystone = require('keystone');

module.exports = async function({postID}, user) {
    keystone.isAuth(user);

    const requestedPost = await keystone.request('Post', postID, {
        populate: 'comments'
    });

    if (!user._id.equals(requestedPost.author) && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right to do that.');
    }

    requestedPost.comments.forEach(p => p.remove());

    if (requestedPost.image) {
        fs.unlink('upload/images/' + requestedPost.image.filename, () => {});
    }

    await requestedPost.remove();

    return {};
};
