const express = require('express')

const app = express();

app.get("", (req,res) =>{
    res.send("<h1>Example of express.js under the node.js</h1>")
});
app.get("/about", (req,res) =>{
    res.send("<h1>Example of express.js under the node.js of the about page </h1>")
});
app.get("/home", (req,res) =>{
    res.send("<h1>this is the Home page </h1>")
});
app.get("/contact", (req,res) =>{
    res.send("<h1>This is Contact pages</h1>")
});
app.listen(3200);