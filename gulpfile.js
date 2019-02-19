const postcss = require('gulp-postcss');
const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');

const autoprefixer = require('autoprefixer'); /*postcss prefixer*/
const cssnano = require('cssnano'); /*postcss css compressor*/
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
// const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify'); /*js compression*/
const del = require('del'); /*cleaner*/
const imagemin = require('gulp-imagemin'); /*picture compressor*/
const imageminJpegRecompress = require('imagemin-jpeg-recompress'); /*plugin for gulp-imagemin*/
const svgstore = require('svgstore'); /*svg-sprite creator*/
const fs = require('fs');
const path = require('path');
// var pug = require('gulp-pug');

const stylesPathFrom = 'src/styles/**/*.less';
const stylesPathTo = 'build/styles/';

const scriptsPathFrom = 'src/scripts/**/*.js';
const scriptsPathTo = 'build/scripts/';

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(stylesPathFrom, styles);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

function styles() {
    /*postcss plugins*/
    const plugins = [
        autoprefixer({browsers: ['last 3 version']}),
        cssnano()
    ];
    return gulp.src(stylesPathFrom)

        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss(plugins))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(stylesPathTo))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(scriptsPathFrom)
        .pipe(uglify())
        .pipe(gulp.dest(scriptsPathTo));
}

function remove() {
    return del(['build/*']);
}

function images() {
    return gulp.src('src/images/**/*{jpg,png}')
        .pipe(imagemin([
            imageminJpegRecompress({
                progressive: true,
                max: 80,
                min: 70
            }),
            // imageminPngquant(),
        ]))
        .pipe(gulp.dest('build/images'));
}

function svgsprite() {
    gulp.task('svgstore', function () {
        return gulp
            .src('src/icons/sprites/*.svg')
            .pipe(svgstore())
            .pipe(rename('new-sprite.svg'))
            .pipe(gulp.dest('build/icons/sprites/'));
    });
}
/*/!*livereload task*!/
gulp.task('browser-sync', function() {
    var files = [
        'build/!**!/!*.html',
        'build/!**!/!*.htm',
        'build/styles/!**!/!*.css',
        'build/scripts/!**!/!*.js',
        'build/images/!**!/!*.jpg',
        'build/images/!**!/!*.png',
        'build/images/!**!/!*.svg'
    ];
    browserSync.init(files, {
        server: {
            baseDir: 'build/'
        }
    });
});*/

/*/!*pug --> html*!/
gulp.task('pug', function buildHTML() {
    return gulp.src('src/!**!/!*.pug')
        .pipe(pug({
            pretty: true //минимизирует код(false)
        }))
        .pipe(gulp.dest('build/'));
});*/

gulp.task('scripts', scripts);
gulp.task('styles', styles);
gulp.task('images', images);
gulp.task('watch', watch);
gulp.task('build', gulp.series(remove, gulp.parallel(styles, scripts), images));
gulp.task('dev', gulp.series('build', watch));

//browserify babel