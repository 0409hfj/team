var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))

})
gulp.task("watch", function() {
    return gulp.watch("./src/scss/index.scss", gulp.series("sass"))
})

gulp.task('dev', gulp.series("sass", 'watch'));