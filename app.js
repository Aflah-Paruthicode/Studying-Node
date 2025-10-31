
const { divide, multiply, sum } = require("./calculate");
const { ApiCall, readTextFile, timout } = require("./async");

const num1 = 4;
const num2 = 8;

divide(num1, num2);
multiply(num1, num2);
sum(num1, num2);

ApiCall();
timout();
readTextFile();
console.log('just home console');