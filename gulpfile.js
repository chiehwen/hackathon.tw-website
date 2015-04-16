var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

// watch
gulp.task('watch', function() {
    gulp.watch([
        'style/less/base/*.less',
        'style/less/layout/*.less',
        'style/less/module/*.less',
        'style/less/themes/*.less',
    ], ['less']);
});

// less
gulp.task('less', function() {
    return gulp.src('style/less/style.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('style/css'));
});