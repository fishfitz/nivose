const keystone = require('keystone'),
    User = keystone.list('User'),
    config = require('../config.js');

exports = module.exports = function(done) {
    new User.model({
        name: config.ADMIN_NAME,
        email: config.ADMIN_EMAIL,
        password: config.ADMIN_PASSWORD,
        canAccessKeystone: true
    }).save(done);
};
