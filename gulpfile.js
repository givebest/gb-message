var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    cleanCSS     = require('gulp-clean-css'),
    rename       = require('gulp-rename'),
    plumber      = require('gulp-plumber');
    autoprefixer = require('gulp-autoprefixer');



// sass -> css
gulp.task('sass', function () {
  return gulp.src('./src/css/gb-message.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer('last 10 versions', 'id 9'))
    .pipe(gulp.dest('./src/css'));
});




gulp.task('default', ['sass']);
