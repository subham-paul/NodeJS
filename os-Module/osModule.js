const os = require('os');


console.log(os.arch()); // Returns the operating system CPU architecture

console.log(os.freemem()) // free system / RAM memory in bytes

const freeMem = os.freemem();
console.log(`${freeMem / 1024 / 1024 / 1024}`); // free system / RAM memory in GB

console.log(os.totalmem()) // Total system / RAM memory in bytes

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`); // Total system / RAM memory in GB

console.log(os.homedir()) // current user's home directory.

console.log(os.hostname()) // host name of the operating system

console.log(os.platform()) // OS name

console.log(os.release()) // Returns the operating system as a string.

console.log(os.type()) // Returns the operating system name 