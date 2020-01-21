const gulp = require("gulp");

const autoprefixer = require("gulp-autoprefixer")({ grid: true });

gulp.task("prefix", () =>
  gulp
    .src("index.css")
    .pipe(
      autoprefixer({
        browsers: ["last 99 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("style"))
);
