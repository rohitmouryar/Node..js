const http = require('http');

const fs = require('fs');

http.createServer((req, res) => {
   fs.readFile('index.html', (err, data) => {
    if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        req.readableEnded();

        return;
    }
        res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url == "/"){
        res.write(data);
    } else if (req.url =="/submit"){
        res.write("<h2>Form submitted successfully!</h2>");
        
    }
    res.end();
   })
}).listen(3100);