// Path module provides a way of working with directories and file paths.
const path = require("path");

console.log(path.dirname('E:/Udemy Full Stack/NodeJS/pathModule/path.js')); // Returns the directories of a path

console.log(path.extname('E:/Udemy Full Stack/NodeJS/pathModule/path.js')); // Returns the file extension of a path

console.log(path.basename('E:/Udemy Full Stack/NodeJS/pathModule/path.js')); // Returns the last portion of a path

console.log(path.parse('E:/Udemy Full Stack/NodeJS/pathModule/path.js')); // This method returns an object whose properties represent significant elements of the path.

const pathName = path.parse('E:/Udemy Full Stack/NodeJS/pathModule/path.js');
console.log(pathName.name); // call property using parse