const fs = require("fs");

//! write file

// fs.writeFile("hey.txt", "hey hello world", (err) => {
//   if (err) console.log(err);
//   else console.log("done");
// });

//! append file

// fs.appendFile("hey.txt", " you are best", (err) => {
//   if (err) console.log(err);
//   else console.log("done");
// });

//! rename file

// fs.rename("hey.txt", "greetingFile.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("done");
// });

//! copy file
// fs.copyFile("greetingFile.txt", "./copy2/duplicate.txt", (err) => {
//   if (err) console.log(err.message);
//   else console.log("done");
// });

//! delete empty folder
// fs.unlink("greetingFile.txt", (err) => {
//   if (err) console.log(err.message);
//   else console.log("removed");
// });

// fs.rm("./copy", (err) => {  //! it does not remove the directory even with the file inside it
//   if (err) console.log(err.message);
//   else console.log("removed");
// });

// ! delete non empty folder
// fs.rm("./copy",{recursive:true}, (err) => {  //! it remove the directory even with the file inside it
//   if (err) console.log(err.message);
//   else console.log("removed");
// });

//! creating server
// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end("hello world")
// });

// server.listen(3000)

// ! read directory
// fs.readdir("./", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//! getting file stats
// fs.stat("hey.txt", (err, stats) => {
//   if (err) throw err;
//   console.log(stats.isFile());
//   console.log(stats.size);
// });

//! Using Promises with fs\promises

/*
const nfs = require("fs/promises");
async function readFileData() {
  try {
    const data = await nfs.readFile("hey.txt","utf-8");
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
readFileData()
*/


