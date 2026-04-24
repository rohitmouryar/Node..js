const express = require('express')
const app = express();

// const express = require('express')();

app.get("", (req,res)=>{
    res.send("<h1>This is express js course</h1>")
})

app.get("/about", (req,res)=>{
    res.send("<h1>This is bout page of express js </h1>")
})

app.get("", (req,res)=>{
    res.send("<h1>This is express js course</h1>")
})

// console.log(app)

app.listen(3100)