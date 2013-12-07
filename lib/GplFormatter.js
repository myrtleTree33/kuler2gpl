/**GplFormatter.js**/
var EOL = require('os').EOL;

GplFormatter = (function() {
	return {
		format: function(document) {
			var dataStr = "GIMP Palette" + EOL + 'Name: ' + document.title + EOL + 'Columns: ' + '0' + EOL + '#' + EOL;

			for (var i = 0; i < document.colors.length; i++) {
				var color = document.colors[i];
				dataStr += color.red + ' ' + color.green + ' ' + color.blue + ' ' + 'Color' + i.toString() + EOL;
			}
			return dataStr;
		}
	};

})();

module.exports = GplFormatter;