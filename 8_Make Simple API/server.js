const http = require('http');

const userData = [
    {
        name:'Rohit',
        age:22,
        Gradudation:'B.Tech'
    },
    {
        name:'Rohit',
        age:22,
        Gradudation:'B.Tech'
    },
    {
        name:'Rohit',
        age:22,
        Gradudation:'B.Tech'
    },
    {
        name:'Rohit',
        age:22,
        Gradudation:'B.Tech'
    }
]

http.createServer((req,res)=>{
    res.setHeader("Context-Type", 'application/json');
    res.write(JSON.stringify(userData));
    res.end();
}).listen(6100);

