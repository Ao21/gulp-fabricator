'use strict';

var through = require('through2');
var Buffer = require('buffer').Buffer;
var gutil = require('gulp-util');
var path = require('path');
var dss = require('dss');

function plugin(opts) {

	console.log('options: ', opts);

	function transform (file, enc, cb) {
		dss.parser('version', function (e, text) {
			return text;
		})
		dss.parse(file.contents.toString(), {}, function(dssFile) {

			//file.contents = dssFile;
			if (dssFile.blocks.length > 0) {
				var dss = JSON.stringify(dssFile);
				file.contents = new Buffer(dss);
				file.path = file.path.slice(0,-4) + 'json';
			}
			else {
				file = null;
			}
			
			cb(null, file);
			
		})
	}
	
	function createStylesArray(styles, cb) {
		
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
