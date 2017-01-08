const gulp = require('gulp');
const deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
  return gulp.src('./dest/**/*').pipe(deploy())
});
