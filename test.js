var expect = require('chai').expect;
var gulp = require('gulp');
var through = require('through2');
var fs = require('fs');
var del = require('del');
var self = require('./');

describe('gulp-plugin', function() {
	it('create atlas with only .tps file', function(done) {
		del.sync(['test/dist/*']);
		gulp.src('test/atlas.tps')
		.pipe(self())
		.pipe(through.obj(function (file, enc, cb) {

			expect(fs.readFileSync('test/dist/atlas.json')).to.not.be.null;
			expect(fs.readFileSync('test/dist/atlas.png')).to.not.be.null;
			done();
			cb();
		}))

		this.timeout(8000);
	});

	it('create atlas with options', function(done) {
		del.sync(['test/dist/*']);
		gulp.src(['test/*.tps'])
		.pipe(self({
			sheet:'./test/dist/main.png',
			data:'./test/dist/data.json'
		}))
		.pipe(through.obj(function (file, enc, cb) {

			expect(fs.readFileSync('test/dist/data.json')).to.not.be.null;
			expect(fs.readFileSync('test/dist/main.png')).to.not.be.null;
			done();
			cb();
		}))

		this.timeout(8000);
	});

	it('create atlas with options and %name%', function(done) {
		del.sync(['test/dist/*']);
		gulp.src(['test/*.tps'])
		.pipe(self({
			sheet:'./test/dist/%name%.png',
			data:'./test/dist/%name%.json'
		}))
		.pipe(through.obj(function (file, enc, cb) {

			expect(fs.readFileSync('test/dist/atlas.json')).to.not.be.null;
			expect(fs.readFileSync('test/dist/atlas.png')).to.not.be.null;
			done();
			cb();
		}))

		this.timeout(8000);
	});
})
