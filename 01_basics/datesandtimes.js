//dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreateedDate = new Date(2023, 0, 23)
// let mycreateedDate = new Date(2023, 0, 23, 5, 3)
let mycreateedDate = new Date("2023-01-14")
let mytimestamp = Date.now()
// console.log(mycreateedDate.toLocaleString());
// console.log(mytimestamp);
// console.log(mycreateedDate.getTime());
console.log((Date.now()/1000));
console.log(Math.floor(Date.now()/1000));// decimal hatt jaate hai 

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());
