const keystone = require('keystone');

module.exports = async function({email}) {
    const user = await keystone.list('User').model.find({
        email: email.toLowerCase()
    }).exec();

    if (user) {
        throw new Error('Email already exist');
    }

    return {};
};