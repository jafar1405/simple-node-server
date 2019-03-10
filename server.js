const http = require('http');

http.createServer((req,res)=>{
    res.end('hi')
}).listen(process.env.PORT || 8080)