// node js uses REPL => read, evaluate, print, loop

const {calculateMult,sum,xyz} = require('./calculate')
const data = require('./data.json')
// require("./xyz.js");
require("./xyz");
var a=10
var b=20


console.log(calculateMult(a,b))
console.log(sum(2, 3));
// console.log(xyz());

console.log(JSON.stringify(data));
