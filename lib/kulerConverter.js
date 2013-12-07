/** KulerConverter.js **/

var Rgb = require('./Rgb')
, GplFormatter = require('./GplFormatter')
, Iconv = require('iconv').Iconv;


/** Private vars **/
var kulerConverter = function() {
	this._byteData;
	this._byteDataStr;
	this._result;
}


/** Struct for document **/
var document = {
	title : 'bla',
	colors : [],
	reset : function() {
		this.title = '', 
		this.colors = [];
	}
};


/** Public functions **/


kulerConverter.prototype.convert = function(data) {
	document.reset();
	_byteData = data;
	_byteDataStr = data.toString('hex');
	getTitle();
	getRgb();
	this._result = GplFormatter.format(document);
	return this._result;

}


kulerConverter.prototype.display = function() {
	console.log(this._result);

}


/** Internal functions **/

var getTitle = function() {
	var titleLen = 0
	, titleMarker = /(?:c0010000.{4})(.{4})/g;
	
	while(match = titleMarker.exec(_byteDataStr)) {
		var idx = match.index + 16;
		titleLen = getInt(match[1]) - 1;
		var title = getUtf8String(idx, titleLen * 4);
		document.title = title;
	}
}


var getRgb = function() {
	var rgbMarker = /(?:52474220)(.{8})(.{8})(.{8})/g;

	while(match = rgbMarker.exec(_byteDataStr)) {
		var rgb = new Rgb();
		var r   = match[1];
		var g   = match[2];
		var b   = match[3];
		rgb.makeColor(r,g,b);
		document.colors.push(rgb);
	}
}


/** Helper functions **/


var getInt = function(hexString) {
	return Buffer(hexString, 'hex').readUInt16BE(0);
}


var getUtf8String = function(startIdx, byteLen) {
	var titleInBytes = _byteDataStr.substr(startIdx, byteLen);
	var titleBuffer = Buffer(titleInBytes, 'hex');

	iconv = new Iconv('UTF-16', 'UTF-8');
	return iconv.convert(titleBuffer).toString('utf8');

}


module.exports = kulerConverter;