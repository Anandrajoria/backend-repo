const fs = require("fs");
const https = require("https");

console.log("helllo world");

var a = 1012;
var b = 2344;

https.get("https://dummyjson.com/product/1", (res) => {
  console.log("fetched data successfully");
});

fs.readFileSync("./app.js","utf-8")
setTimeout(() => {
    console.log("setTimeOut worked after 5 seconds");
    
}, 5000);


fs.readFile("./app.js","utf-8",(err,data)=>{
    console.log("file data: " , data);
})
function multiply(a,b){
    const result=a*b
    return result
}

let c= multiply(a,b)
console.log(c);
