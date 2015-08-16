var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");

gulp.task("sass", function () {
    gulp.src("./static/scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./static/css"));
});

gulp.task("sass:watch", function () {
    gulp.watch("./static/scss/*.scss", ["sass"]);
});

gulp.task("webserver", function () {
    gulp.src("./")
        .pipe(webserver({
            livereload: true,
            open: true,
            host: "0.0.0.0",
            port: 8082
        }));
});
