const gulp = require('gulp'),
    fileinclude = require('gulp-file-include'), //include html components
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    purgecss = require('gulp-purgecss'),
    notify = require("gulp-notify"),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    imgJpeg = require('imagemin-jpegoptim'),
    browserSync = require('browser-sync').create(),
    svgSprite = require('gulp-svg-sprite'),/// if using dirty svg
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    svgstore = require('gulp-svgstore'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

//PATHS
const path = {
    build: {
        html: 'build/',
        js: 'build/script',
        style: 'build/style',
        img: 'build/assets/img',
        svg: 'build/assets/',
        fonts: 'build/assets/fonts'
    },
    src: {
        html: 'src/index.html',
        js: 'src/scripts/index.js',
        style: 'src/styles/style.less',
        img: 'src/assets/img/**/*.*',
        svg: 'src/assets/svg/*.*',
        fonts: 'src/assets/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/main.js',
        style: 'src/styles/**/*.*',
        img: 'src/assets/img/**/*.*',
        svg: 'src/assets/svg/*.*',
        fonts: 'src/assets/fonts/**/*.*'
    },
    clean: './build'
};

gulp.task('html', () => {
    return gulp.src(path.src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({
                stream: true
        }));
});

gulp.task('styles', () => {
    return gulp.src(path.src.style)
        //.pipe(sourcemaps.init())
        .pipe(less())
        .pipe(purgecss({
            content: ["src/**/*.html"]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleancss({level: {1: {specialComments: 0}}}))
        .on("error", notify.onError({
            title: "styles"
        }))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('img', () => {
    return gulp.src(path.src.img)
        .pipe(imagemin([
            imgJpeg({
                progressive: true,
                interlaced: true,
                max: 70,
            }),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('svgsprite', function () {
    return gulp.src(path.src.svg)
        .pipe(svgstore())
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest(path.build.svg))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('clean', () => {
    return gulp.src(path.build.html)
        .pipe(clean());
});

gulp.task('watch', function() {
    gulp.watch(path.watch.html, gulp.series('html'));
    gulp.watch(path.watch.style, gulp.series('styles'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        tunnel: true,
        notify: false
    });
});

gulp.task('build', gulp.series(
    'clean',
    'html',
    'styles',
    'img',
    'svgsprite'
));

gulp.task('dev', gulp.series( 'build',
    gulp.parallel('watch', 'serve')
));