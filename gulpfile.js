'use strict';

var gulp = require('gulp');
var simpleBuildKarma = require('simplebuild-karma');

var config = { };

gulp.task('startKarma', function(done){
    simpleBuildKarma.start({
        configFile: 'karma.conf.js'
    }, done, done);
});

gulp.task('runKarma', function(done){
    simpleBuildKarma.run({
        configFile: 'karma.conf.js'
    }, done, done);
});