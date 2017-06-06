let nodemon =  require('gulp-nodemon');
const gulp = require('gulp');


gulp.task('default', () => {
  nodemon({
    script: 'index.js',
    ext: 'js',
    ignore: 'node_modules/'

})

});