var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-clean-css');
var sass =require('gulp-sass');

gulp.task('sass', function() {
    // content
    return gulp.src('dev/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
});

gulp.task('minify', function() {
    // content
    return gulp.src('dev/*.css')
        .pipe(autoprefixer({browsers: ['last 3 versions']}))
        .pipe(gulp.dest('css'))
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
    // content
    
    gulp.watch('dev/sass/*.scss', ['sass']);
});

gulp.task('minify-watch', function() {
    // content
    gulp.watch('css/*.css', ['minify']);
});

gulp.task('default',['watch','minify-watch']);