const keystone = require('keystone');

module.exports = async function({tagID, dest}) {
    const [tagFrom, tagTo] = await keystone.findTags([tagID, dest]);
    if (!tagFrom || !tagTo) {
        throw new Error('One or both tags do not exist.');
    }

    tagTo.synonyms.push(tagFrom.name);
    if (!tagTo.description && tagFrom.description) {
        tagTo.description = tagFrom.description;
    }

    const posts = await keystone.list('Post').model.find({
        tags: {
            $in: tagFrom._id
        }
    });

    await Promise.all([tagTo.save(), ...posts.map(p => {
        p.tags.splice(p.tags.find(t => t.equals(tagFrom._id)), 1, tagTo._id);
        return p.save();
    })]);

    return keystone.format(tagTo);
};
