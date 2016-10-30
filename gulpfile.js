var gulp = require('gulp');

gulp.task('minify-css', function () {
    gulp.src('./Css/one.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('path/to/destination'));
});