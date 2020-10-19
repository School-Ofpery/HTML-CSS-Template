const {watchSass} = require('./sass');
const {watchNunjucks} = require('./nunjucks');
const {watchStatic} = require('./static-files');
const {watchWebpack} = require('./webpack');
const {parallel} = require('gulp');

exports.watch = parallel(
    watchSass,
    watchNunjucks,
    watchWebpack,
    watchStatic
);