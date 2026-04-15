const http = require('http');

const age = 29;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
  res.write("<h2>This is understanding server response</h2>");
  res.write(`
    <html>
    <head>
    <title>Server</title>
    </head>
    <body>
    <h1>Hello World</h1>
    <h2>`+age+`</h2>
    <h3>`+new Date()+`</h3>
    </body>
    </html>
    `)
  res.end('Hello World!');
  process.exit();
})

server.listen(4800);