const keystone = require('keystone');

module.exports = async function({postID}, user) {
    let requestedPost = await keystone.request('Post', postID);
    let comments = await keystone.request('Commentary', requestedPost.comments, '_id');
    await comments.populate('author');

    comments = comments.map(c => keystone.format(c, {
        author: {
            slug: c.author.slug,
            name: c.author.name
        }
    }));

    return keystone.format(requestedPost, {
        comments
    });
};
