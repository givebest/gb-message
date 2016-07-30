var gulp         = require('gulp');
var sass         = require('gulp-sass');
var cleanCSS     = require('gulp-clean-css');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var runSequence  = require('run-sequence');



// sass -> css
gulp.task('sass', function(){
  return gulp.src('./src/css/gb-message.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 10 versions', 'ie 9'))
    .pipe(gulp.dest('./src/css'));
});

// .css -> .min.css
gulp.task('cssMin', function(){
    return gulp.src('./src/css/gb-message.css')
    .pipe(plumber())
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));
});

// uglify
gulp.task('jsUglify', function(){
    return gulp.src('./src/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'));
});

// copy source to dist
gulp.task('copySrc', function(){
    return gulp.src(['./src/*.html', './src/**/*.js', './src/**/*.css'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', function(done){
    runSequence(
        ['sass'],
        ['cssMin'], 
        ['jsUglify'],
        ['copySrc'],
        done);
});
