// primitive
// 7 categories 
// string,number,Boolean,null,undefined,symbol,BigInt

// reference tyoe(non primitive)
// array,objects,functions

const score = 100
const scorevalue = 100.3
const isloggedin= false
const outsidetemp = null
let useremail;

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id === anotherid);

// const bignumber = 1234567891011n

const heroes = ["shaktiman","nagraj","doga"];
let myobj = {
    name:"abhiwak" ,
    age: 22,
}

const myFunction = function(){
    console.log("HELLO WORLD");
}

console.log(typeof myFunction);
console.log(typeof heroes);