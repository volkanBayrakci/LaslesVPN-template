const gulp = require('gulp'); // Gulp ana değişken
const browserSync = require('browser-sync').create(); // Browser Local
const htmlmin = require('gulp-htmlmin'); // Html minify
const sass = require('gulp-sass'); // Gulp Sass 
const minifycss = require('gulp-minify-css'); // Css minify
const autoPrefixer = require('gulp-autoprefixer'); // Css autoprefixer
const uglify = require('gulp-uglify-es').default; // Javascript minify
const imagemin = require('gulp-imagemin'); // İmage minify

function watch() {
  browserSync.init({
    server: {
      baseDir: 'dist/'
    }
  });
  gulp.watch('./src/sass/*.scss',css);
  gulp.watch('./src/**/*.html',html).on('change', browserSync.reload);
  gulp.watch('./src/js/*.js',javascript).on('change', browserSync.reload);
  gulp.watch('./src/img/*',image).on('change', browserSync.reload);
}

function html(){
  return gulp.src('./src/*.html')
  .pipe(htmlmin({ collapseWhitespace : true}))
  .pipe(gulp.dest('./dist/'))
}

function css() {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(autoPrefixer({
      browsers : ['last 2 versions'],
      //grid: ['autoplace'],
      cascade: false
    }))
    .pipe(minifycss({
      keepSpecialComments : 1
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
}

function javascript(){
  return gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
}

function image(){
  return gulp.src('./src/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/img/'))
}


exports.watch = watch;
exports.html = html;
exports.css = css;
exports.javascript = javascript;
exports.image = image;
