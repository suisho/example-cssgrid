var gulp = require('gulp')
var sass = require('gulp-sass')
var jade = require('gulp-jade')
gulp.task('watch', function () {
  gulp.watch('*.jade',["template"])
  gulp.watch('scss/**/*.scss',["sass"])
})
gulp.task('template', function () {
  gulp.src('index.jade')
    .pipe(jade({
      pretty: true
    }).on("error", function(e){console.log(e)} ))
    .pipe(gulp.dest("./"))
})
gulp.task('sass', function () {
  gulp.src('scss/**/*.scss')
    .pipe(sass().on("error", function(e){console.log(e)} ))
    .pipe(gulp.dest('./css/'));
})

gulp.task('default', ['sass', 'template', 'watch'])


