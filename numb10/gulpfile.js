const gulp = require('gulp');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('uglify', () => {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('htmlmin', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('autoprefixer', () => {
  return gulp.src('src/css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', () => {
  gulp.watch('src/js/*.js', gulp.series('uglify'));
  gulp.watch('src/*.html', gulp.series('htmlmin'));
  gulp.watch('src/css/*.css', gulp.series('autoprefixer'));
});

gulp.task('default', gulp.parallel('uglify', 'htmlmin', 'autoprefixer', 'watch'));
