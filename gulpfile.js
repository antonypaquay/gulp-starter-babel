const gulp = require("gulp");
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');

const paths = {
  styles: {
    src: "src/scss/styles.scss",
    watch: "src/scss/**/*.scss",
    dest: "public/css"
  },
  scripts: {
    src: "src/js/app.js",
    watch: "src/js/**/*.js",
    dest: "public/js"
  },
  templates: {
    src: "public/**/*.html",
    watch: "public/**/*.html"
  }
};

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on("error", function (err) {
        notify({
          title: "SASS Error: " + err.code,
          message: err.message,
          sound: false
        }).write(err);
        return this.emit("end");
      }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(rollup({ plugins: [babel({ presets: ['@babel/env'] }), resolve(), commonjs()] }, 'umd')
      .on("error", function (err) {
        notify({
          title: "JS Error: " + err.code,
          message: err.message,
          sound: false
        }).write(err);
        return this.emit("end");
      })
    )
    .pipe(uglify())
    .pipe(rename("bundle.min.js"))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.reload({ stream: true }));
}

function reload(done) {
  browserSync.reload();
  done();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.scripts.watch, scripts);
  gulp.watch(paths.templates.watch, reload);
}

gulp.task("default", watch);
