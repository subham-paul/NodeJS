const fs = require("fs");

// fs.writeFile("read.txt", "today is awesome.", (err) => {
//     console.log("created");
//     console.log(err);
// });

// fs.appendFile("read.txt", " Good morning", (err) => {
//     console.log("task complete");
// });

// Sync used for Synchronous Programming and without sync it call Asynchronous 
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);

 fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data);
    console.log(err);
});