const keystone = require('keystone');

module.exports = async function({tagID}) {
    const requestedTag = await keystone.findTags([tagID]);
    return keystone.format(requestedTag);
};
