var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

{/*
    BUILD_DIR contains the fils that will be loaded when the page is rendered on the browser.
    APP_DIR is the location where we have the files we are working
*/}


var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
};

module.exports = config;

{/*
    export default config;

    or

    return(config);

*/}