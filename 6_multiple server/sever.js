const http = require('http');
http.createServer((req, res) => {
    res.write("<h1>Hello World</h1>");
    res.end();
}).listen(4800);



const https = require('http');
https.createServer((req, res) => {
    res.write("<h1>Hello World</h1>");
    res.end();
}).listen(5800);