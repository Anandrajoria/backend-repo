//! express js ek npm package h
// framework
// it manages everything from recieveing request and giving responce

const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log('middleare chala');
    next()
})

app.use((req,res,next)=>{
    console.log('middleare chala ek or baar');
    next()
})
// routes create karna
app.get("/", (req, res) => {
  res.send("currently you are at home page");
});
app.get("/profile", (req, res,next) => {
  return next(new Error("something went wrong"))
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("something broke")
    
})

app.listen(3000);

//! middleware => jb bhi server request accept karta h wha se route ke beech
//! pahuhne tak agar app us request  ko beech me rockte ho aur kuch perform karte ho to ye middleware hota h


