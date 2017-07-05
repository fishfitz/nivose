const keystone = require('keystone');

module.exports = function(tagNames, limit) {
    let formattedTags = tagNames.map(t => {
        if (typeof t === 'string') {
            return t.toLowerCase();
        }
        return t;
    });
    let request = keystone.list('Tag').model.find({
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
    });
    if (limit) {
        request.limit(limit);
    }
    return request.exec();
};
