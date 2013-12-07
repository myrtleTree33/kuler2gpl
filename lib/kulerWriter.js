var Q = require('q')
	, fs = require('fs')
	, KulerConverter = require('./kulerConverter');


KulerWriter = (function() {
	var _src = ''
		, _dest = '';

	function readFile() {
		var deferred = Q.defer();

		fs.readFile(_src, function(err, data) {
			if (err) deferred.reject(new Error(err));
			deferred.resolve(data);
		});

		return deferred.promise;
	}


	function makeFile(data) {
		var converter = new KulerConverter();
		return converter.convert(data);
	}


	function writeFile(data) {
		fs.writeFile(_dest,
			data, {
				encoding: 'utf8'
			},

			function(err) {
				if (err) throw err;
			});
	}


	return {
		convertAndWrite: function(srcFile, destFile) {
			_src = srcFile,
			_dest = destFile;

			Q.fcall(readFile)
				.then(makeFile)
				.then(writeFile)
				.done();

		}
	};

});


module.exports = KulerWriter;