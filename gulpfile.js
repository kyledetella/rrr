'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var del = require('del');

var config = {
  dist: './public_dist',
  server: { port: 3080 },
  src: {
    css: {
      all: './public/css/**/*.scss',
      main: './public/css/rrr.scss'
    },
    js: {
      all: './public/js/**/*.js',
      main: './public/js/app.js',
      output: 'rrr.js'
    }
  }
};

gulp.task('js', function () {
  return browserify(config.src.js.main)
    .transform(reactify)
    .bundle()
    .pipe(source(config.src.js.output))
    .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('css', function () {
  return gulp.src(config.src.css.main)
    .pipe(sass())
    .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('development', ['default'], function () {
  nodemon({
    script: './bin/www',
    ext: 'js',
    ignore: ['gulpfile.js', 'public/*', 'public_dist/*']
  })
  .on('restart', function () {
    console.log('--- Restarted ---');
  })
})

gulp.task('watch', function () {
  gulp.watch(config.src.js.all, ['js']);
  gulp.watch(config.src.css.all, ['css']);
});

gulp.task('clean', function () {
  return del('./public_dist/');
});

gulp.task('default', ['clean', 'watch', 'js', 'css']);
