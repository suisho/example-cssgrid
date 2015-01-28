var gulp = require('gulp');
var sass = require('gulp-sass');
//var gutil = require('gulp-util');
gulp.task('sass', function () {
  gulp.watch("scss/**/*.scss", function(e){
    gulp.src('scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./css/'));
  })
})
gulp.task('default', ['sass'])