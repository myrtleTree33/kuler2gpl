var Q = require('q')
	, KulerWriter = require('./lib/kulerWriter')
	, Walker = require('walker')
	, Path = require('path')
	, Program = require('commander');


Program
	.version('0.0.0')
	.option('-i, --inputDir [dir]', 'Input Directory')


Program.on('--help', function() {
	console.log('Converts Kuler color palette files to GIMP / Inkscape GPL files.  (:')

});


Program.parse(process.argv);


/******************************************/


if (!Program.inputDir) {
	process.exit(1);
}


var stats = {
	numConverted : 0
}


Walker(Program.inputDir)
.on('file', function(file, stat) {
	if (Path.extname(file) !== '.ase') return;

	stats.numConverted++;
	var filename = Path.basename(file, '.ase')
	, folder     = Path.dirname(file)
	, srcFile    = file
	, destFile   = folder + Path.sep + filename + '.gpl';

	var kulerWriter = new KulerWriter();
	kulerWriter.convertAndWrite(srcFile, destFile);

})

.on('end', function() {
	console.log(stats.numConverted.toString() + ' files converted.');
})
