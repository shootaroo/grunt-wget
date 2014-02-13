# grunt-wget 0.0.1 [![NPM version](https://badge.fury.io/js/grunt-wget.png)](http://badge.fury.io/js/grunt-wget) [![Build Status](https://secure.travis-ci.org/shootaroo/grunt-wget.png?branch=master)](http://travis-ci.org/shootaroo/grunt-wget) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Wget plugin for Grunt.


## Install

```
npm install grunt-wget --save-dev
```

## Usage

```
module.exports = function (grunt) {
  grunt.initConfig({

    wget: {

      common: {
        src: [
          'http://code.jquery.com/jquery-1.11.0.min.js',
          'http://code.jquery.com/jquery-2.1.0.min.js',
        ],
        dest: 'path/to'
      },

      single: {
        files: [
          {
            src: 'http://code.jquery.com/jquery-1.11.0.min.js',
            dest: 'path/to/1.11.0/jquery.js'
          },
          {
            src: 'http://code.jquery.com/jquery-2.1.0.min.js',
            dest: 'path/to/2.1.0/jquery.js'
          }
        ]
      },

      oldfashion: {
        files: {
          'path/to/jquery-1.11.0.js': 'http://code.jquery.com/jquery-1.11.0.js',
          'path/to/jquery-2.1.0.js': 'http://code.jquery.com/jquery-2.1.0.js',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-wget');
};

```

## License

The MIT License (MIT)

Copyright &copy; 2014 [Shotaro Tsubouchi](https://github.com/shootaroo)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/shootaroo/grunt-wget/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

