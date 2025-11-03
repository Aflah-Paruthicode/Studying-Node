
const fs = require('fs')
setImmediate(() => console.log('setImmediate'))
setTimeout(() => console.log('timout'))

Promise.resolve('promise').then(console.log) 

fs.readFile('./text.txt','utf8',() => {
    setTimeout(() => console.log('timout inside file reading'),0)
    console.log('file reading')
})


process.nextTick(() => {
    console.log('next tick')
    process.nextTick(() => console.log('2nd next tick'));
    Promise.resolve('prmise inside nexttick').then(console.log) 

})

console.log('the only sync code')
