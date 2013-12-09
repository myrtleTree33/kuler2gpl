/** Rgb.js **/

var Ansi = require('ansi') 
	, cursor = Ansi(process.stdout);

var Rgb = function() {
	this.red,
	this.green,
	this.blue,
	this.redFl,
	this.blueFl,
	this.greenFl;
}


Rgb.prototype.print = function() {
	console.log('<' + this.red + ',' + this.green + ',' + this.blue + '>');
}


Rgb.prototype.makeColor = function (r,g,b) {
	this.redFl   = parseFloat(r);
	this.greenFl = parseFloat(g);
	this.blueFl  = parseFloat(b);

	this.red     = floatNormalize255(this.redFl);
	this.green   = floatNormalize255(this.greenFl);
	this.blue    = floatNormalize255(this.blueFl);
}


Rgb.prototype.printColor = function() {
	var hexStr = '#' + convertToHex(this.redFl) + convertToHex(this.greenFl) + convertToHex(this.blueFl);
	printStrColor('██████', hexStr);
};

var convertToHex = function(colorDec) {
	var theNumber = Math.round(colorDec * 0xff);
	return ('00' + theNumber.toString(16)).slice(-2);
}


var printStrColor = function(input, colorCode) {
	cursor
		.hex(colorCode)
		.write(input)
		.reset();
};


var padZeroes = function(input) {
	return String('000' + input).slice(-3);
};


var parseFloat = function(hexString) {
	return Buffer(hexString, 'hex').readFloatBE(0);
};


var floatNormalize255 = function (someFloat) {
	var theNumber = Math.round(someFloat * 0xff);
	return padZeroes(theNumber.toString());

};


module.exports = Rgb;
