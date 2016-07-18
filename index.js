'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');
var fs = require('fs');
var lodash = require('lodash');

// insert defaults here
var defaults = {

}

var self = function(options){
	options = utils.extend({},defaults,options);
	// out put erros example
	// if (file.isStream()) return callback(new gutil.PluginError('gulp-flash', 'Streaming not supported'));
	return through.obj(function (file, enc, callback) {

	})
}

module.exports = self;
