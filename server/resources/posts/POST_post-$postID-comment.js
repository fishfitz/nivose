const keystone = require('keystone');

module.exports = async function({postID, content}, user) {
    keystone.isAuth(user);

    const requestedPost = await keystone.request('Post', postID);
    const comment = new (keystone.list('Commentary')).model({
        author: user,
        content: {
            md: content
        }
    });
    const savedComment = await comment.save();

    requestedPost.comments.push(savedComment._id);
    await requestedPost.save();

    return keystone.format(comment);
};
