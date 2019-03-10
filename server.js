const http = require('http');

http.createServer((req,res)=>{
    res.end(`
        <!doctype html>
            <html>
                <head>
                    <title>Simple node server</title>
                </head>
                <body>
                    <h1 style="background-color:red; color:white">Simple node server</h1>
                </body>
            </html>
    
    `)
}).listen(process.env.PORT || 8080)