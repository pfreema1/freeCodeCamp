/*
*
*			Barebones gulpfile.  Only has browserSync.  Make sure to change the directories!
*
*/


var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


//this uses the gulp-watch plugin
gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "./Notes_Modules"
        }
    });

   

    watch('./Notes_Modules/*', function() {
        browserSync.reload();

    });

});



