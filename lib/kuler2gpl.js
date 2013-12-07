var Q = require('q')
	, KulerWriter = require('./kulerWriter')
	, Kuler2Gpl = require('./kuler2gpl')
	, Walker = require('walker')
	, Path = require('path');


var kuler2gpl = (function() {
	var stats = {
		numConverted: 0
	}

	return {
		run: function(inputDir) {
			Walker(inputDir)
				.on('file', function(file, stat) {
					if (Path.extname(file) !== '.ase') return;

					stats.numConverted++;
					var filename = Path.basename(file, '.ase'),
						folder = Path.dirname(file),
						srcFile = file,
						destFile = folder + Path.sep + filename + '.gpl';

					var kulerWriter = new KulerWriter();
					kulerWriter.convertAndWrite(srcFile, destFile);

				})

			.on('end', function() {
				console.log(stats.numConverted.toString() + ' files converted.');
			})

		}
	}
})();


module.exports = kuler2gpl;