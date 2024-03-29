"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
// "use strict";

// var gulp = require("gulp");
// var less = require("gulp-less");
// var plumber = require("gulp-plumber");
// var postcss = require("gulp-postcss");
// var autoprefixer = require("autoprefixer");
// var minify = require("gulp-csso");
// var imagemin = require("gulp-imagemin");
// var rename = require("gulp-rename");
// var del = require("del");
// var run = require("run-sequence");
// var server = require("browser-sync").create();

// gulp.task("images", function() {
//   return gulp.src("build/img/**/*.{png, jpg,gif}")
//     .pipe(imagemin([
//       imagemin.optipng({optimizationLevel: 3}),
//       imagemin.jpegtran({progressive: true})
//       ]))
//     .pipe(gulp.dest("build/img"))
// });

// gulp.task("style", function() {
//   gulp.src("less/style.less")
//     .pipe(plumber())
//     .pipe(less())
//     .pipe(postcss([
//       autoprefixer({browsers: [
//         "last 1 versions",
//         "last 2 Chrome versions",
//         "last 2 Firefox versions",
//         "last 2 Opera versions",
//         "last 2 Edge versions"
//       ]})
//     ]))
//     .pipe(gulp.dest("build/css"))
//     .pipe(minify())
//     .pipe(rename("style.min.css"))
//     .pipe(gulp.dest("build/css"));
// });

// gulp.task("copy", function() {
//   return gulp.src([
//     "fonts/**/*.{woff,woff2,ttf}",
//     "img/**",
//     "js/**",
//     "*.html"
//   ], {
//     base: "."
// })
//   .pipe(gulp.dest("build"));
// });


// gulp.task("clean", function() {
//   return del("build");
// });

// gulp.task("build", function(fn) {
//   run(
//     "clean",
//     "copy",
//     "style",
//     "images",
//     fn
//   );
// });

// gulp.task("serve", function() {
//   server.init({
//     server: "build",
//     notify: false,
//     open: true,
//     cors: true,
//     ui: false
//   });

//   gulp.watch("less/**/*.less", ["style"]);
//   gulp.watch("*.html").on("change", server.reload);
// });
