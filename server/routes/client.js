const path = require('path'),
    template = require('fs').readFileSync(path.join(__dirname, '../client/template.html'), 'utf-8'),
    renderer = require('vue-server-renderer')
        .createBundleRenderer(require('../client/bundle.json'), {
            template,
            basedir: path.join(__dirname, '../client'),
            runInNewContext: true
        });

const routes = ['/', '/create', '/edit/:slug', '/election/:slug', '/election/:slug/:voteKey'];

module.exports = function(app) {
    app.get(routes, (req, res) => {
        const stream = renderer.renderToStream({
            url: req.originalUrl,
            isAuth: !!req.user,
            head: req.user ? '<script> window._AUTH = true; </script>' : ''
        });

        stream.on('error', (err) => {
            console.log(err);
            stream.removeAllListeners('data')
            .removeAllListeners('error')
            .removeAllListeners('end');
            res.end(String(err));
        });

        stream.on('data', (chunk) => {
            res.write(chunk);
        });

        stream.on('end', () => {
            stream.removeAllListeners('data')
            .removeAllListeners('error')
            .removeAllListeners('end');
            res.end();
        });
    });
};
