const keystone = require('keystone');

module.exports = async function({
        tagsToInclude = [],
        tagsToExclude = [],
        reference,
        excludeID,
        pageSize,
        withComments = false,
        after = true
    }) {
    const {maxPageSize, maxRequestTags} = await keystone.config();
    [tagsToInclude, tagsToExclude] = keystone.castToArray(tagsToInclude, tagsToExclude);
    [withComments, after] = keystone.castToBoolean(withComments, after);

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

    const dateReference = reference ? new Date(reference) : new Date();
    const operator = after ? '$lte' : '$gte';
    const order = after ? '-' : '';
    const maxedPageSize = Math.max(1, Math.min(pageSize, maxPageSize)) +
        (excludeID ? 1 : 0);

    let posts = await keystone.list('Post').model.find({
        tags: {
            $all: includeIDs,
            $nin: excludeIDs
        },
        posted_at: {
            [operator]: dateReference
        }
    })
    .sort(`${order}posted_at`) // sort it by publication date only for now
    .limit(maxedPageSize)
    .populate({
        path: 'author',
        select: 'slug name avatar'
    })
    .populate({
        path: 'tags',
        select: 'slug name color'
    });

    posts = keystone.format(posts);
    if (excludeID) {
        const index = posts.findIndex(p => p.slug === excludeID);
        if (index === -1 && posts.length > 1) {
            posts.pop();
        }
        else if (index !== -1) {
            posts.splice(index, 1);
        }
    }

    if (withComments) {
        await Promise.all(posts.map(async p => {
            const comments = await keystone.request('Commentary', p.comments, {
                path: '_id',
                populate: {
                    author: 'slug name avatar'
                }
            });
            p.comments = comments.map(c => {
                return keystone.format(c, {author: keystone.format(c.author)});
            });
            return;
        }));
    }

    return {
        posts
    };
};
