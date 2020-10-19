const gulp = require('gulp');
const sass = require('gulp-sass');
const {config} = require('./gulp.config');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const prefix = require('autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
 
sass.compiler = require('node-sass');
 
function sassDev() {
  return gulp.src(config.src.precss + '/**/*.+(scss|sass)')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
        prefix()
    ]))
    .pipe(gcmq())
    .pipe(gulp.dest(config.dest.css), {sourcemaps: true});
}

function sassProd() {
    return gulp.src(config.src.precss + '/**/*.+(scss|sass)')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
          prefix(),
          cssnano()
      ]))
      .pipe(gcmq())
      .pipe(gulp.dest(config.dest.css));
  }
 
function watchSass(){
  gulp.watch(config.src.precss + '/**/*.+(scss|sass)', sassDev);
}

exports.sass = {sassDev, sassProd}
exports.watchSass = watchSass;