const keystone = require('keystone');

module.exports = async function({postID, commentID}, user) {
    keystone.isAuth(user);

    const requestedComment = await keystone.request('Commentary', commentID, {
        path: '_id'
    });

    if (!user._id.equals(requestedComment.author) && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right to do that.');
    }

    await requestedComment.remove();

    const post = await keystone.request('Post', postID);
    post.comments.splice(post.comments.findIndex(c => c.equals(commentID)), 1);
    await post.save();

    return {};
};
