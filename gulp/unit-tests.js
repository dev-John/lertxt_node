'use strict';

const gulp = require('gulp');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('test', (done) => {
  console.log('Starting test');

  const mocha = require('gulp-mocha');
  gulp.src('src/{,**/}*.spec.js', { read: false })
    .pipe(
      mocha({
        reporter: 'mocha-jenkins-reporter',
        reporterOptions: {
          junit_report_path: 'test-results.xml'
        }
      })
      .on('error', handleError)
    );

  done();
});
