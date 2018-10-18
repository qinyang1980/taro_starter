const gulp = require('gulp');
const del = require('del');
const shell = require('gulp-shell');

////////////////////////////////////////////////////
gulp.task('start', ['post-process'], shell.task(['yarn run dev:weapp']));
gulp.task('build', ['post-process'], shell.task(['yarn run build:weapp']));

gulp.task('clean', () => {
  return del('./dist', { force: true });
});

gulp.task('task', ['post-process']);

gulp.task('post-process', ['clean'], () => {
  const genConstants = require('./gulp/gen-constants');
  genConstants.genPages();
  genConstants.genModels();

  const genImages = require('./gulp/gen-images');
  genImages();
});
