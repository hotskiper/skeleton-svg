var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync');
gulp.task('sass',function(){
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});
gulp.task('html',function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'))
});
gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('src/sass/*.scss',['sass']);
    gulp.watch('src/*.html',['html']);
});
gulp.task('browser-sync',function(){
    browserSync.init({
        files:['**'],
        server:{
            baseDir:'./dist',
            index:'index.html'
        },
        port:3000
    })
});
gulp.task('default',function(){
    gulp.run('browser-sync','watch');
})

