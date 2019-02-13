// Include Gulp
var gulp = require('gulp');

// Include Plugins
var less = requre('gulp-less');
var path = require('path');

// Less
gulp.task('less', function () {
    return gulp.src('less/*.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('dist/css'));
  });

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
})

// Default task
gulp.task('default', ['less']);