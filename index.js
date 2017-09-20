'use strict';
var through = require('through2');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var exec = require('child_process').exec;

// insert defaults here
var defaults = {
	log:false,
	sheet:null,
	textureFormat:null,
	data:null,
	format:null,
	backgroundColor:null,
}

var self = function(options){
	options = _.extend({},defaults,options);

	var argsAvaible = [
		'sheet',
		'textureFormat',
		'data',
		'format',
		'backgroundColor',
	];

	return through.obj(function (file, enc, done) {
		var filename = path.basename(file.path, path.extname(file.path));
		var args = _.reduce(_.pick(options,argsAvaible),function(resp,val,i){
			if(val!==null){
				resp.push('--'+_.kebabCase(i)+' '+val.toString().replace('%name%', filename));
			}

			return resp;
		},[]).join(" ");

		exec('TexturePacker '+file.path+' '+args, function(err, stdout, stderr){
			if(options.log) console.log(stdout);

			done(err,file);
		})
	})
}

module.exports = self;
