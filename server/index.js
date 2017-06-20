const keystone = require('keystone');
const fs = require('fs');
const config = require('./config');

process.chdir(__dirname);

keystone.init({
    name: config.NAME,
    static: ['public'],
    'auto update': true,
    session: true,
    'session store': 'mongo',
    auth: true,
    'user model': 'User',
    'signin redirect': '/',
    'signout redirect': '/',
    'cookie secret': config.COOKIE_SECRET,
    mongo: config.MONGO,
    port: config.PORT,
    host: config.HOST
});

fs.readdirSync('./models').forEach(m => {
    require('./models/' + m);
});

fs.readdirSync('./libs/utils').forEach(u => {
    keystone[u.replace('.js', '')] = require('./libs/utils/' + u);
});

keystone.set('routes', require('./routes'));

keystone.start();
