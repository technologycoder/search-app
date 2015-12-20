var gulp = require('gulp');
var jshint = require('gulp-jshint');
var source = 'js/**/*.js';

gulp.task('lint', function() {
    return gulp.src(source)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch(source, ['lint']);
});

gulp.task('default', ['lint', 'watch']);
