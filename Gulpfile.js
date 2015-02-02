var gulp = require('gulp')
var sass = require('gulp-sass')
var jade = require('gulp-jade')
//console.log(jade)
/*
gulp.task('template', function () {
  //gulp.watch("index.jade", function(e){
    gulp.src('index.jade')
      .pipe(jade({}))
      .pipe(gulp.dest("index.html"))
  //})
})
*/
gulp.task('sass', function () {
  gulp.watch("scss/**/*.scss", function(e){
    gulp.src('scss/**/*.scss')
      .pipe(sass().on("error", function(e){console.log(e)} ))
      .pipe(gulp.dest('./css/'));
  })
})

gulp.task('default', ['sass', 'template'])


