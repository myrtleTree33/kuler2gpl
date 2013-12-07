#!/usr/bin/env node


console.log('Node OK');

var Program = require('commander')
, Kuler2Gpl = require('../lib/kuler2gpl')


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


Kuler2Gpl.run(Program.inputDir);
