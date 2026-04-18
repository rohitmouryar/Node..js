// Synchronous
// console.log("Rohit")
// console.log("Renu")
// console.log("Divesh")




// Asynchronous
// console.log("Rohit")
// setTimeout(()=>{
// console.log("Renu")
// },2000)
// console.log("Divesh")


const fs = require('fs')

// fs.writeFileSync('hello.txt',"Asychronous and synchronous lecture of step by step youtube channel")
// fs.readFile('./hello.txt', 'utf-8', (err,data)=>{
//     if (err) {
//     console.error(err);
//     return;
// }
//     console.log(data)
// })
// console.log('end')



const data= fs.readFileSync('./hello.txt','utf-8',)
console.log(data)