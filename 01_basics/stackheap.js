// two types of memory
// stack (primitive)-copy  milega ,(non primitve) Heap- refrenece milega!!

let myytname = "pokechatter"

let anothername = myytname
anothername="chaiaurcode"

console.log(myytname);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let usertwo = userOne
usertwo.email="user@yahoo.com"

console.log(userOne.email);
console.log(usertwo.email);
