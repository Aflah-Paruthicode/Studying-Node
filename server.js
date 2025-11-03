
const http = require('node:http')

const server = http.createServer((req,res) => {
    if(req.url == '/new') res.end('not now dude')
    res.end('Hello brother it`s from sever')
})

server.listen(3000)