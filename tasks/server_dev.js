import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import {
  path,
  tasks
} from './client/const';


gulp.task(tasks.SERVER_DEV, [tasks.CLIENT_BUILD_DEV, tasks.CLIENT_WATCH], () => {
  'use strict';
  return nodemon({
      script: path.ROOT + 'index.js',
      watch: path.SERVER + '**/*.*',
      env: {
        'NODE_ENV': 'development'
      }
    });
});
