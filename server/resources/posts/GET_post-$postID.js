const keystone = require('keystone');

module.exports = async function({postID}) {
    const requestedPost = await keystone.request('Post', postID, {
        populate: {
            author: 'slug name',
            tags: 'name color'
        }
    });

    const comments = await keystone.request('Commentary', requestedPost.comments, {
        path: '_id',
        populate: {
            author: 'slug name avatar'
        }
    });

    return keystone.format(requestedPost, {
        comments: keystone.format(comments)
    });
};
