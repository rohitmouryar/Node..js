import express from 'express';
import path from 'path';

const app = express();
const absPath = path.resolve('file');
const publicPath = path.resolve('public')
app.use(express.static(publicPath)); 

app.get("/", (req, res) => {
    res.sendFile(absPath+'/home.html'); // ✅ fix
});

app.get("/login", (req, res) => {
    res.sendFile(absPath+'/login.html'); // ✅ fix
});

app.get("/about", (req, res) => {
   res.sendFile(absPath+'/about.html'); // ✅ fix
});

app.use((req,res)=>{
    res.status(404).sendFile(absPath+'/404.html')
})
app.listen(3100, () => {
    console.log("Server running on http://localhost:3100");
});