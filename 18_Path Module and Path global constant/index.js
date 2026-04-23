
// path madule
const path = require('path')
const file = "file/hello.txt";


console.log(path.extname)
console.log(path.dirname(file))
console.log(path.basename)

console.log(path.resolve("text","hello.txt"))

console.log(path.isAbsolute(file))

// global constant
console.log(__dirname);
console.log(__filename);
