// require("./xyz.js");
const obj = require("./sum.js");

console.log(globalThis == global);

console.log(obj.sum (2, 3));
console.log(obj.x);
