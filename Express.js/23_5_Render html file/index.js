import express from 'express';
import path from 'path';

const app = express();

app.get("/", (req, res) => {
    const absPath = path.resolve('file/home.html');
    console.log(absPath);

    res.sendFile(absPath); // ✅ fix
});

app.get("/login", (req, res) => {
    const absPath = path.resolve('file/login.html');
    console.log(absPath);

    res.sendFile(absPath); // ✅ fix
});

app.get("/about", (req, res) => {
    const absPath = path.resolve('file/about.html');
    console.log(absPath);

    res.sendFile(absPath); // ✅ fix
});
app.listen(3100, () => {
    console.log("Server running on http://localhost:3100");
});