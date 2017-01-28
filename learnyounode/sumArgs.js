/**
 * Sum program arguments
 */
var sum = 0;
var arguments = process.argv;

for (var i = 2; i < arguments.length; i++)
    sum += Number(arguments[i])

console.log(sum);
