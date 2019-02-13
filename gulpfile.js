// Include Gulp
var gulp = require('gulp');

// Include Plugins
var less = requre('gulp-less');
var path = require('path');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');

// Less
gulp.task('less', function () {
    return gulp.src('less/*.less')
    .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('dist/css'));
});

// BrowserSync
gulp.task('browser-sync', function() {
    browserSync.init(['css/*.css'], {
        server: {
            baseDir: './'
        }
    });
});

// Imagemin
gulp.task('minify-images', function() {
    gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/resized-images'))
});

// Watch files for changes
gulp.task('default', ['less', 'browser-sync', 'minify-images'], function() {
    gulp.watch("less/*.less", ['less']);
})