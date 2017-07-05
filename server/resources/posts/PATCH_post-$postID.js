const fs = require('fs');
const keystone = require('keystone');

module.exports = async function({postID, description, image}, user) {
    keystone.isAuth(user);

    const requestedPost = await keystone.request('Post', postID);

    if (!user._id.equals(requestedPost.author) && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right to do that.');
    }

    if (description !== undefined) {
        requestedPost.description.md = description;
    }

    if (image !== undefined) {
        if (requestedPost.image) {
            fs.unlink('upload/images/' + requestedPost.image.filename, () => {});
        }
        await keystone.cbToPromise(requestedPost._.image.upload, image);
    }

    const updatedPost = await requestedPost.save();

    return keystone.format(updatedPost, {
        posts: requestedPost.posts.length,
        favorites: requestedPost.favorites.length
    });
};
