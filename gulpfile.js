/**
 * Created by Administrator on 2018/1/11.
 */
// ���� gulp�����
var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');

gulp.task('default',function(){
    gulp.start('minify');
});

//JS����
gulp.task("minify",function(){
    gulp.src(['./static/before/*.js','./static/before/js/*.js','./static/before/js/**/*.js'])
        .pipe(ngAnnotate())
        .pipe(ngmin({dynamic: false}))
        .pipe(uglify())
        .pipe(gulp.dest('./dest/after'))
})


