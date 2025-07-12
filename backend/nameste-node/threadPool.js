process.env.UV_THREADPOOL_SIZE = 5;


const fs = require("fs");
const crypto = require("crypto");


crypto.pbkdf2("passward", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1 - cryptoPBKDF2 done");
});
fs.readFile("./app.js", "utf-8", () => {
  console.log("file reading CB");
});

crypto.pbkdf2("passward", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2 - cryptoPBKDF2 done");
});

crypto.pbkdf2("passward", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3 - cryptoPBKDF2 done");
});
crypto.pbkdf2("passward", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4 - cryptoPBKDF2 done");
});

crypto.pbkdf2("passward", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5 - cryptoPBKDF2 done");
});



/*
there are 4 thread bydefault in thread pool but you can change the size ofmthread pool
 */
/*  // run this command to get desired output

$env:UV_THREADPOOL_SIZE=2
>> node threadPool.js

*/