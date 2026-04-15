const fs = require('fs')
fs.writeFileSync("dummy.txt", "Trying with modules");

const os = require("os");

// OS platform
console.log(os.platform());

// System name
console.log(os.hostname());

// CPU information
console.log(os.cpus());



// Global Objects
console.log("Hello");

console.log(process.cwd()); // current directory
console.log(process.pid);   // process ID


// Global Object को customize करना

const { log } = require("console");

log("Custom log");