const http = require('http');

const arg = process.argv;
console.log(arg[2])
http.createServer((req,res)=>{
    res.write("<h1>Hello World</h1>");
    res.end();
}
).listen(arg[2]);