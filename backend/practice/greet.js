// function greet(name){
//     return `hello ${name}`
// }
// module.exports=greet


// ! require loads modules synchronously at runtime (blocking).
// module.exports =function greet(name){
//     return `hello ${name}`
// }

// exports = a=10

// Importing ESM in CommonJS

(async ()=>{
    const math = import('./ESmodule/math.mjs')
    console.log(((await math).add(2,3)));
})()