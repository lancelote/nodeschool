/**
 * Asynchronously count number of new lines in a given file
 */

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function callback(err, text) {
    console.log(text.split('\n').length - 1);
});
