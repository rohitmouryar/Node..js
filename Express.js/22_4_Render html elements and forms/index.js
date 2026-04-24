import express from 'express';

const app = express();

import login from './Pages/login.js';
import form from './Pages/form.js';
import submit from './Pages/submit.js';

app.get("/", (req, res) => {
    res.send(login());
});

app.get("/form", (req, res) => {
    res.send(form());
});

app.post("/submit", (req, res) => {
    res.send(submit());
});

app.listen(3200, () => {
    console.log("Server running on port 3200");
});