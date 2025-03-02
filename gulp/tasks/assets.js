const assets = () => {
  return $.gulp.src($.path.assets.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'ASSETS',
        message: error.message
      }))
    }))
    .pipe($.gulp.dest($.path.assets.dest))
    .pipe($.browserSync.stream());
};

module.exports = assets;