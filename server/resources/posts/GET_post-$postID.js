const keystone = require('keystone');

module.exports = async function({postID}, user) {
    const requestedPost = await keystone.request('Post', postID);
    await requestedPost.populate('author tags');

    const comments = await keystone.request('Commentary', requestedPost.comments, '_id');
    await comments.populate('author');

    return keystone.format(requestedPost, {
        author: {
            slug: requestedPost.author.slug,
            name: requestedPost.author.name
        },
        tags: keystone.format(requestedPost.tags),
        comments: comments.map(c => keystone.format(c, {
            author: {
                slug: c.author.slug,
                name: c.author.name
            }
        }))
    });
};
