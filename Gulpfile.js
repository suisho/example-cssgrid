var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.watch("scss/**/*.scss", function(e){
    gulp.src('scss/**/*.scss')
      .pipe(sass().on("error", function(e){console.log(e)} ))
      .pipe(gulp.dest('./css/'));
    console.log("End")
  })
})
gulp.task('default', ['sass'])