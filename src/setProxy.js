const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.sue(
        proxy('/api', {
            target: 'http://localhost:3001/'
        })
    );
};