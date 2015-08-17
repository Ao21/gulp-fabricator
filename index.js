'use strict';

var through = require('through2');
var Buffer = require('buffer').Buffer;
var gutil = require('gulp-util');
var path = require('path');
var dss = require('dss');

function plugin(opts) {

	console.log(opts);

	function transform (file, enc, cb) {
		dss.parse(file.contents.toString(), {}, function(dssFile) {
			console.log(dssFile);
			file.contents = dssFile;
			cb(null, file);
		})
	}

	function sendToUILibrary(file) {
		callURL(opts.uiLibraryUrl, file);
	}

	function callURL(url, obj) {
		// Call URL
	}

  	
  	return through.obj(transform)
  
}



module.exports = plugin;
