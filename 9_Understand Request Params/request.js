const http = require('http');

http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.body);

    if(req.url == "/"){
    res.write("<h1>Hello World</h1>");
    } else if(req.url == "/about"){
        res.write("<h1>About Us</h1>");
    } else if(req.url == "/contact"){
        res.write("<h1>Contact Us</h1>");
    }else{
        res.write("<h1>Page Not Found</h1>");
    }

    res.end();
}).listen(6100);