const keystone = require('keystone');

module.exports = async function({commentID, content}, user) {
    keystone.isAuth(user);
    keystone.thruthy({content});

    const requestedComment = await keystone.request('Commentary', commentID, {
        path: '_id'
    });

    if (!user._id.equals(requestedComment.author) && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right to do that.');
    }

    requestedComment.content.md = content;
    const updatedComment = await requestedComment.save();
    await requestedComment.populate('author');

    return keystone.format(updatedComment);
};
