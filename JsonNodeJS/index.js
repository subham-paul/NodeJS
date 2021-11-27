// convert to json
// add in another file
// readfile
// again convert back to js obj. orient.
// console.log

const fs = require("fs")
const userData = {
    uName : "Subham",
    age : 24,
    location : "Kolkata",
};

// stringify method used for Object to JSON convertion
// parse method used for JSON to object data convertion
// const jsonData = JSON.stringify(userData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData);


// =>
const jsonData = JSON.stringify(userData);

fs.writeFile("jsonData.json", jsonData, (err) => {
    // console.log("Ok");
});

fs.readFile("jsonData.json", "utf-8", (err, data) => {
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})