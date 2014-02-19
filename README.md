# grunt-wget 0.1 [![NPM version](https://badge.fury.io/js/grunt-wget.png)](http://badge.fury.io/js/grunt-wget) [![Build Status](https://secure.travis-ci.org/shootaroo/grunt-wget.png?branch=master)](http://travis-ci.org/shootaroo/grunt-wget) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Wget plugin for Grunt.


## Install

```
npm install grunt-wget --save-dev
```


## Wget task

Run this task with the `grunt wget` command.

Task targets, files and options may be specified according to the grunt Configuring tasks guide.


### Options

#### baseUrl

Type: `String`

This option is base url of download contents.

#### overwrite

Type: `Boolean`
Default: `false`

Whether to download the existing files. Set `true` to download the existing files.


## Usage Example

```js
module.exports = function (grunt) {
  grunt.initConfig({

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
          'jquery-2.0.3.js',
          'jquery-2.0.3.min.js',
          'jquery-2.0.3.min.map',
          'jquery-1.10.2.js',
          'jquery-1.10.2.min.js',
          'jquery-1.10.2.min.map'
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



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/shootaroo/grunt-wget/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

