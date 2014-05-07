'use strict';
module.exports = function (grunt) {

  require('jit-grunt')(grunt)({
    loadTasks: 'tasks'
  });

  grunt.initConfig({
    clean: ['tmp'],
    jshint: {
      options: {
        jshintrc: true
      },
      all: ['*.js', 'tasks/**/*.js']
    },
    wget: {
      simple: {
        files: {
          'tmp/jquery.js': 'http://code.jquery.com/jquery-1.11.1.js',
          'tmp/underscore-1.6.0.min.js': 'https://raw.github.com/jashkenas/underscore/1.6.0/underscore-min.js'
        }
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
