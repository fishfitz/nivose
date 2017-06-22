const keystone = require('keystone');
const checkMail = require('./GET_user-check-mail-$email');
const checkUserName = require('./GET_user-check-name-$name');

module.exports = async function({name, password, passwordConfirm, email}, user) {
    const {allowNewMemberSignUp} = await keystone.config();

    if (!allowNewMemberSignUp) {
        throw new Error('Inscriptions were closed by the owner');
    }

    if (user) {
        throw new Error('You are already logged in.');
    }

    if (password !== passwordConfirm) {
        throw new Error('Password do not match.');
    }

    keystone.truthy({password});
    checkMail({email});
    checkUserName({name});

    const createdUser = new (keystone.list('User')).model({
        name,
        email,
        password
    });

    await createdUser.save();

    return keystone.format(createdUser, {
        _id: undefined,
        password: undefined,
        canAccessKeystone: undefined,
        posts: 0,
        favorites: 0
    });
};
