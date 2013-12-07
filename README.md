Kuler2gpl
===========

## What is it?

Converts Adobe Kuler ASE Color swatches to the GIMP / Inkscape GPL format.


## Why?

There wasn't a tool available for Linux, so here's one.


## Install

	$ npm install -g kuler2gpl


## Usage

	$ kuler2gpl -i /path/to/input/directory

Kuler2gpl places the newly converted GPL swatch in the same directory, and walks the entire directory tree.  All Adobe kuler files should end with `.ase`.


## Help

	$ kuler2gpl --help


## Known issues

Currently, only swatches utilizing the RGB color space are supported.  LAB color spaces will be supported in the future!


## Bugs

File on the bug tracker.



**License** : MIT
**Author** : <a href="blog.joeltong.org">jhtong</a>
