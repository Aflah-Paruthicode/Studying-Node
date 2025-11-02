
const fs = require("fs");
const a = 100;

setImmediate(() => console.log("set immediate is prineted"));

Promise.resolve('promise').then(console.log);

setTimeout(() => console.log("timer printed"), 0);

process.nextTick(() => console.log("nextTick is printed"));

function printA() {
  console.log("a is : ", a);
}

printA();
console.log("the last line wrote in the file");
