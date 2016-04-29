var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-babel');
var minifyCss = require('gulp-minify-css');

/*SCSS*/
var $    = require('gulp-load-plugins')();

var path = {
  HTML: 'src/index.html',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  MINIFIED_OUT: 'components.min.js',
  SCRIPTS_MINIFIED_OUT: 'main.js',
  //ADMIN_MINIFIED_OUT: 'admin.components.min.js',
  DEST_BUILD: '.',
  DEST_SCRIPTS_BUILD: '',
  DEST: 'dist'
};

gulp.task('react', function () {
  return gulp.src('components/*.jsx')
    .pipe(react())
    .pipe(concat(path.MINIFIED_OUT))
    .pipe(uglify(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});

// watch styl, html and js file changes
gulp.task('watch', function() {
  //gulp.watch(app + 'css/*.css', ['css']);
  gulp.watch('components/*.jsx', ['react']);
});

// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['watch']);
