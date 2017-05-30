
module.exports = function() {
    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/'
    };

    return {
        vendors: [
            bower.directory + 'jquery/dist/jquery.js',
            bower.directory + 'jquery-is-on-screen-moagrius/jquery.isonscreen.js'
        ],
        build: './dist/',
        vendorsBuild: 'vendors.min.js',
        jsBuild: 'jquery.gtm-in-viewport.min.js'
    };
};
