/**
 * Count number of new lines in a given file
 */
var arguments = process.argv;
if (arguments.length < 3) {
    console.log('Please specify the file!')
} else {
    var filePath = process.argv[2];
    var fs = require('fs');
    var buffer = fs.readFileSync(filePath);
    // Or right into text without buffer
    // var text = fs.readFileSync(process.argv[2], 'utf8')
    var text = buffer.toString();
    var lines = text.split('\n');

    console.log(lines.length - 1);
}
