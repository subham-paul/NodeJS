// In Node-JS every file we call module
const sum = (a,b) => { // parameter for function define
    return a+b;
};

const sub = (a,b) => { // parameter for function define
    return a-b;
};

const mul = (a,b) => { // parameter for function define
    return a*b;
};

const name = "Subham";

// module.exports.sum = sum; //for export outside files
// module.exports.sub = sub; //for export outside files
// module.exports.mul = mul; //for export outside files

module.exports = {sum,sub,mul};

// module.exports = name;