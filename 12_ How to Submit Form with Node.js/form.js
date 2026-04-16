const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if(req.url === "/"){
        res.write(`
   <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <br><br>
        <button type="submit">Submit</button>
    </form>
    
     `);
   }        else if(req.url === "/submit" && req.method === "POST"){
        res.write("<h2>Form submitted successfully!</h2>");

   }
    
  
    res.end();
  })
  .listen(3000);
