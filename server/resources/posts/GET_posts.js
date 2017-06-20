const keystone = require('keystone');

module.exports = async function({tagsToInclude, tagsToExclude, page, pageSize}) {
    let includeIDs = await keystone.request('Tag', tagsToInclude);
    includeIDs = includeIDs.map(tag => tag._id);

    let excludeIDs = await keystone.request('Tag', tagsToExclude);
    excludeIDs = excludeIDs.map(tag => tag._id);

    const minedPage = Math.min(page, 1);
    const maxedPageSize = Math.max(pageSize, 50);

    const posts = await keystone.list('Post').model.find({
        tags: {
            $all: includeIDs,
            $nin: excludeIDs
        }
    }).skip((minedPage - 1) * maxedPageSize)
    .limit(maxedPageSize)
    .sort('-posted_at'); // sort it by publication date only for now

    return {
        posts: keystone.format(posts)
    };
};
