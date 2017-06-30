const keystone = require('keystone');

module.exports = async function({userID}, user) {
    let requestedUser = await keystone.request('User', userID);
    requestedUser = keystone.format(requestedUser, {
        _id: undefined,
        canAccessKeystone: undefined,
        posts: requestedUser.posts.length,
        favorites: requestedUser.favorites.length
    });

    if (!user || (!user._id.equals(userID) && !user.canAccessKeystone)) {
        delete requestedUser.email;
    }

    return requestedUser;
};
