const keystone = require('keystone');

module.exports = async function({tagsToInclude = [], tagsToExclude = [], page, pageSize}) {
    const {maxPageSize, maxRequestTags} = await keystone.config();
    [tagsToInclude, tagsToExclude] = keystone.castToArray(tagsToInclude, tagsToExclude);

    if (!tagsToInclude.length) {
        throw new Error('At least one tag must be included.');
    }

    if (tagsToInclude.length + tagsToExclude.length > maxRequestTags) {
        throw new Error('No more than 15 search terms.');
    }

    let includeIDs = await keystone.findTags(tagsToInclude);
    includeIDs = includeIDs.map(tag => tag._id);

    let excludeIDs = await keystone.findTags(tagsToExclude);
    excludeIDs = excludeIDs.map(tag => tag._id);

    const minedPage = Math.min(page, 1);
    const maxedPageSize = Math.max(pageSize, maxPageSize);

    const posts = await keystone.list('Post').model.find({
        tags: {
            $all: includeIDs,
            $nin: excludeIDs
        }
    }).skip((minedPage - 1) * maxedPageSize)
    .limit(maxedPageSize)
    .populate('author')
    .sort('-posted_at'); // sort it by publication date only for now

    return {
        posts: posts.map(p => keystone.format(posts, {
            author: {
                slug: p.author.slug,
                name: p.author.name
            },
            comments: undefined,
            tags: undefined
        }))
    };
};
