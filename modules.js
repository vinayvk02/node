const names = require("./names");
const fun = require("./funcs");
require("./some");
// // if (num < 10) console.log("Less number");
// else console.log("Higher number");
// setInterval(() => {
//   console.log(2);
// }, 5000);

fun(names.num, names.num2);
console.log(names);
fun(9, 10);
