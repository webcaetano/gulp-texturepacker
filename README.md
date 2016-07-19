# gulp-texturepacker

[![npm][npm-img]][npm-url]

Gulp plugin for TexturePacker

## Installation

```
npm install gulp-texturepacker
```

## Examples

```javascript
var tps = require('gulp-texturepacker');

gulp.src('test/atlas.tps')
.pipe(tps()); // output .tps with his setup
```

With options 
```javascript
gulp.src(['test/*.tps'])
.pipe(tps({
	sheet:'./test/dist/main.png',
	data:'./test/dist/data.json'
}));
```

## Options

#### sheet

Destination of spritesheet image (png, jpg, etc)

#### data

Destination of data file (json, plist, etc)

#### textureFormat

Sets the format for the textures.<br>
The format type is automatically derived from the sheet

#### format

TexturePacker format e.g. cocos2d, phaser-json-array<br>
Full list at TexturePacker --help

#### backgroundColor

background color format `FFFFFF`.

#### log

Type `Boolean` Default `false`<br>
Display logs

---------------------------------

The MIT [License](https://raw.githubusercontent.com/webcaetano/gulp-texturepacker/master/LICENSE.md)

[npm-img]: https://img.shields.io/npm/v/gulp-texturepacker.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gulp-texturepacker
