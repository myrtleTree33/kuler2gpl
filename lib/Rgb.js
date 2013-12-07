/** Rgb.js **/

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
	this.redFl = parseFloat(r);
	this.greenFl = parseFloat(g);
	this.blueFl = parseFloat(b);

	this.red = floatNormalize255(this.redFl);
	this.green = floatNormalize255(this.greenFl);
	this.blue = floatNormalize255(this.blueFl);
}


var padZeroes = function(input) {
	return String('000' + input).slice(-3);
}


var parseFloat = function(hexString) {
	return Buffer(hexString, 'hex').readFloatBE(0);
}


var floatNormalize255 = function (someFloat) {
	someFloat = Math.round(someFloat * 0xff);
	return padZeroes(someFloat.toString());

}


module.exports = Rgb;
