// nullish coalescing operator (??): null defined 
let val1;
// val1 =5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 =null ?? 10 ?? 15

console.log(val1);

// terinary operator 

// condition ? true : false 
const iceteaprice= 100
iceteaprice<=80 ? console.log("less than 80"): console.log("greater than 80")