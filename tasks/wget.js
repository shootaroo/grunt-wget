var async = require('async');
var fs = require('fs');
var path = require('path');
var url = require('url');

module.exports = function (grunt) {

  grunt.registerMultiTask('wget', 'Download web contents.', function () {

    var done = this.async();
    var log = grunt.log;
    var count = 0;

    async.forEach(this.files, function (filePair, done) {
      var isSingle = filePair.orig.src.length === 1;
      async.forEach(filePair.orig.src, function (src, done) {
        var srcUrl = url.parse(src);
        var dest = isSingle ? filePair.dest : path.join(filePair.dest, srcUrl.pathname.split("/").pop());
        if (grunt.file.exists(dest)) {
          return done();
        }
        log.verbose.writeln('Downloading', src.cyan, '->', dest.cyan);
        require(srcUrl.protocol === 'https:' ? 'https' : 'http').get(src, function (res) {
          if (res.statusCode >= 400) {
            return done(new Error(res.statusCode + ' ' + src));
          }
          count++;
          grunt.file.mkdir(isSingle ? path.dirname(filePair.dest) : filePair.dest);
          res.pipe(fs.createWriteStream(dest));
          res.on('end', done);
        });
      }, done);
    }, function (err) {
      if (err) {
        grunt.fail.warn(err);
      }
      if (count) {
        log.writeln('Downloaded', String(count).cyan, count === 1 ? 'file' : 'files');
      }
      done();
    });
  });
};