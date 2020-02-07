const gulp = require("gulp");
const rename = require("gulp-rename");
const scss = require("gulp-scss");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("styles", () =>
  gulp
    .src("./index.css")
    .pipe(sourcemaps.init())
    .pipe(
      scss({
        errorLogToConsole: true,
        outputStyle: "compressed"
      })
        .on("error", console.error.bind(console))
        .pipe(autoprefixer())
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./"))
);
