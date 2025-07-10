let fs=require("fs")
let a=100
setImmediate(()=>console.log("set Immediate"))

Promise.resolve(()=>console.log('promise'))

fs.readFile('./app.js',"utf-8",()=>{
    console.log("done reading file");
    
})
setTimeout(() => {
    console.log("timer expire");
    
}, 0);
process.nextTick(()=>console.log(`process.nextTick`))
function print(){
    console.log("a=",a);
    
}
print()
console.log("last line of code");
