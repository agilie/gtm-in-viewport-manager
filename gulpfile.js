
var gulp = require('gulp'),
    fs = require('fs'),
    config = require('./gulp.config')(),
    packageJson = require('./package.json'),
    coffee = require("gulp-coffee"),
    coffeelint = require("gulp-coffeelint"),
    uglify = require("gulp-uglify"),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    header = require("gulp-header"),
    wiredep = require('wiredep');

gulp.task('copy-examples', function () {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest(config.build));
});

gulp.task('compile-vendors', function () {
    gulp.src(config.vendors)
        .pipe(uglify())
        .pipe(concat(config.vendorsBuild))
        .pipe(gulp.dest(config.build + 'build'));
});

gulp.task('compile-coffee', function () {
    gulp.src('./src/**/*.coffee')
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
        .pipe(coffeelint.reporter('fail'))
        .pipe(coffee())
        .pipe(header(fs.readFileSync('copyright'), {version: packageJson.version}))
        .pipe(gulp.dest(config.build + 'build'))
        .pipe(uglify())
        .pipe(rename(config.jsBuild))
        .pipe(header(fs.readFileSync('copyright'), {version: packageJson.version}))
        .pipe(gulp.dest(config.build + 'build'));
});

gulp.task('default', ['compile-coffee', 'compile-vendors', 'copy-examples']);
