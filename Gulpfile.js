var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build', function () {
    return gulp.src('lib/remo.jsx')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('compress', ['build'], function () {
    return gulp.src('dist/remo.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('release', ['build', 'compress']);
