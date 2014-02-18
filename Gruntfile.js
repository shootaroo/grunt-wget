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
      compact: {
        src: 'http://code.jquery.com/jquery-1.11.0.min.js',
        dest: 'tmp/jquery.js'
      },
      basic: {
        options: {
          baseUrl: 'http://code.jquery.com/'
        },
        src: [
          'jquery-1.11.0.min.js',
          'jquery-2.1.0.min.js'
        ],
        dest: 'tmp'
      },
      filesObject: {
        options: {
          baseUrl: 'http://code.jquery.com/'
        },
        files: {
          'tmp/jquery-1x.js': 'jquery-1.11.0.min.js',
          'tmp/jquery-2x.js': 'jquery-2.1.0.min.js'
        }
      },
      overwrite: {
        options: {
          overwrite: true
        },
        src: 'http://code.jquery.com/jquery-2.1.0.min.js',
        dest: 'tmp/jquery.js'
      }
    }
  });

  grunt.registerTask('test', ['clean', 'wget']);
  grunt.registerTask('default', ['jshint', 'test']);
};
