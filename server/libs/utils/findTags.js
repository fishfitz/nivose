const keystone = require('keystone');

module.exports = function(tagNames) {
    let formattedTags = tagNames.map(t => {
        if (typeof t === 'string') {
            return t.toLowerCase();
        }
        return t;
    });
    return keystone.list('Tag').model.find({
        $or: [{
            name: {
                $in: formattedTags
            }
        },
        {
            synonyms: {
                $in: formattedTags
            }
        }]
    }).exec();
};
