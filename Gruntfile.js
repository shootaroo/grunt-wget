'use strict';
module.exports = function (grunt) {

  require('jit-grunt')(grunt);
  grunt.loadTasks('tasks');

  grunt.initConfig({
    clean: ['tmp'],
    jshint: {
      options: {
        jshintrc: true
      },
      all: '*.js'
    },
    wget: {
      common: {
        src: [
          'http://code.jquery.com/jquery-1.11.0.min.js',
          'http://code.jquery.com/jquery-2.1.0.min.js',
        ],
        dest: 'tmp/common'
      },
      single: {
        files: [
          {
            src: 'http://code.jquery.com/jquery-1.11.0.min.js',
            dest: 'tmp/single/1.11.0/jquery.js'
          },
          {
            src: 'http://code.jquery.com/jquery-2.1.0.min.js',
            dest: 'tmp/single/2.1.0/jquery.js'
          }
        ]
      },
      oldfashion: {
        files: {
          'tmp/oldfashion/jquery-1.11.0.js': 'http://code.jquery.com/jquery-1.11.0.js',
          'tmp/oldfashion/jquery-2.1.0.js': 'http://code.jquery.com/jquery-2.1.0.js',
        }
      }
    }
  });

  grunt.registerTask('test', ['clean', 'wget']);
  grunt.registerTask('default', ['jshint', 'test']);
};
