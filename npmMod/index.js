const chalk = require("chalk");
const validator = require("validator")

// console.log(chalk.red.underline.inverse("false"))
// console.log(chalk.green("True"))

const res = validator.isEmail("subham@gmail.com"); //validate gMailId
console.log(res?chalk.green(res) : chalk.red.inverse(res)); //print value