const keystone = require('keystone');
const checkMail = require('./GET_user-check-mail-$email');
const checkUserName = require('GET_user-check-name-$name');

module.exports = async function({userID, name, password, passwordConfirm, email, description}, user) {
    if (!user) {
        throw new Error('You must be sign in');
    }

    if (user.slug !== userID && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right for that');
    }

    const requestedUser = await keystone.request('User', userID);

    if (email !== undefined) {
        checkMail({email});
        requestedUser.email = email;
    }

    if (name !== undefined) {
        checkUserName({name});
        requestedUser.name = name;
    }

    if (password !== undefined) {
        if (password !== passwordConfirm) {
            throw new Error('Password do not match');
        }
        requestedUser.password = password;
    }

    if (description !== undefined) {
        requestedUser.description = description;
    }

    await requestedUser.save();

    return keystone.format(requestedUser, {
        _id: undefined,
        password: undefined,
        canAccessKeystone: undefined,
        posts: requestedUser.posts.length,
        favorites: requestedUser.favorites.length
    });
};
