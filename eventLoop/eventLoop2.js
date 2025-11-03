
const fs = require('fs')
setImmediate(() => console.log('immediate is printed'))

setTimeout(() => console.log('set timout is printed'),0)

Promise.resolve('Promise completed').then(console.log)

fs.readFile('./text.txt','utf8',() => { 

    setTimeout(() => console.log('2nd timout is printed'),0)

    setImmediate(() => console.log('2nd setimmediate'))

    console.log('file reading completed')
})


process.nextTick(() => console.log('nextTick is completed'))

console.log('im the last line,but unfortunatly i will be the first because im not going to libUv -> operation(api call,file reading,..etc..) -> callback queue -> event loop notice that im waiting there -> returning me to here')
