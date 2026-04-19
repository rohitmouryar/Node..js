const fs = require('fs')


// create file
// fs.writeFileSync('./apple.txt','This is a fruit');
// fs.writeFileSync('./mango.txt','This is a fruit');

// read file
// const data = fs.readFileSync('./apple.txt', "utf-8")
// console.log(data)

fs.appendFileSync('./apple.txt', " and it is helpful our body")

// Delete file 
// fs.unlinkSync('./mango.txt')


