//singleton
const mysym = Symbol("key1")
const jsuser ={
    name: "abhiwak",
    "fullname": "abhiwaktiwari",
    [mysym]:"mykey1",
    age: 20,
    location: "indore",
    email:"abhiwak9@gmail.com",
    isloggedin:false,
    lastlogindays:["mon","sat"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["fullname"]);
// console.log(jsuser.mysym)
// console.log(typeof jsuser.mysym)
// console.log(jsuser[mysym])

jsuser.email= "abhiwaktiwari9@gmail.com"
// Object.freeze(jsuser)
jsuser.email ="mratcreations@microsoft.in"
console.log(jsuser);

jsuser.greeting= function(){
    console.log("hello js user");
}
jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());