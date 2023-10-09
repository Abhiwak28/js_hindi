//how to singleton objects

// const tinderuser = new Object()
const tinderuser={}

tinderuser.id ="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false

// console.log(tinderuser);

const regularuser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "abhiwak",
            lastname:"tiwari"

        }
    }
}

// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}

// const obj3 = {obj1,obj2}


// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email:"abhiwak@gmaill.com"
    },
    {
        id: 1,
        email:"hbhiwak@gmaill.com"
    },

{
    id: 1,
    email:"lbhiwak@gmaill.com"
}
]

users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser)); //all key,values in array

console.log(tinderuser.hasOwnProperty('isloggedin'));
console.log(users[0]["email"]);
