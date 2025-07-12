
import greet from '../greet.js'

console.log(greet('rajpal'));


async function loadMath() {
    const math=await import('./math.mjs')
    console.log(math.add(2,3));
    
}
loadMath()