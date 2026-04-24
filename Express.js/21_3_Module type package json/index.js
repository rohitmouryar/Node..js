import express from 'express'
import home, { about } from "./Page/page.js"
import Contact from './Page/contaact.js'





const   app = express('express')

app.get("", (req,res)=>{
    res.send(home())
})

app.get("/about",(req,res)=>{
    res.send(about())
})
app.get("/contact", (req,res)=>{
res.send(Contact())

})




app.listen(3400);