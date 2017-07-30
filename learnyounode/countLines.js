/**
 * Count number of new lines in a given file
 */

var file = process.argv[2];
var fs = require('fs');
var buffer = fs.readFileSync(file);
var text = buffer.toString();
var lines = text.split('\n');

console.log(lines.length - 1);
