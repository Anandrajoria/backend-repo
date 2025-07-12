const { User, Product } = require("./models");

// const u = new User("Rajpal");
// const p = new Product("Laptop");

// console.log(u.name); // Rajpal
// console.log(p.title); // Laptop

const { square, circle } = require("./shapes");
const c = new circle(4);
const s = new square(4);

console.log("circle = ",c.area());
console.log("square = ",s.area());
