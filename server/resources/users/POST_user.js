const keystone = require('keystone');
const checkMail = require('./GET_user-check-mail-$email');
const checkUserName = require('GET_user-check-name-$name');

module.exports = async function({name, password, passwordConfirm, email}, user) {
    if (user) {
        throw new Error('You are already logged in');
    }

    if (password !== passwordConfirm) {
        throw new Error('Password do not match');
    }

    checkMail({email});
    checkUserName({name});

    const createdUser = new keystone.list('User').model({
        name,
        email,
        password
    }).save();

    await createdUser.save();

    return keystone.format(createdUser, {
        _id: undefined,
        password: undefined,
        canAccessKeystone: undefined,
        posts: 0,
        favorites: 0
    });
};
