
const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, res) => {

    if (req.url === "/") {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error loading file");
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }

    else if (req.url === "/submit" && req.method === "POST") {

        let dataBody = [];

        req.on('data', (chunk) => {
            dataBody.push(chunk);
        });

        req.on('end', () => {
            let rawData = Buffer.concat(dataBody).toString();
            let readabledata = queryString.parse(rawData);

            let app = "My name is " + readabledata.name +
                      " and my password is " + readabledata.password;
            fs.writeFileSync("text/" + readabledata.name + ".txt", app);
            console.log(app);
            console.log("File created");

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h2>Form submitted successfully!</h2>");
            res.end();
        });
    }

   

}).listen(4900);