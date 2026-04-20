const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {

    let collectHeader = fs.readFileSync("html/header.html", "utf-8");

    let file = req.url === "/" ? "/Ride" : req.url;

    // Handle CSS
    if (req.url === "/style.css") {
        fs.readFile("html/style.css", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("CSS Load Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
        return;
    }

    // Handle all pages dynamically
    fs.readFile("html" + file + ".html", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Page Not Found ❌");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(collectHeader + data);
    });

}).listen(2100, () => {
    console.log("Server running on port 2100");
});