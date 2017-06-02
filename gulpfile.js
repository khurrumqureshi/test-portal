let nodemon =  require('gulp-nodemon');
const gulp = require('gulp');


gulp.task('default', function () {
  nodemon({
    script: 'index.js'
}),
console.log("In gulpfile.js");
});