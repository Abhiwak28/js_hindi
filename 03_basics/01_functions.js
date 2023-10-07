// function saymyname (){
//   console.log("A");
//   console.log("b");
//   console.log("h");
//   console.log("i");
//   console.log("w");
//   console.log("a");
//   console.log("k");



// saymyname()
// () execute karta hai!

// function addtwonumbers(num1,num2){ //parameters
//     console.log(num1+num2);
// }

// function addtwonumbers(num1,num2){ //parameters
//     // let result=num1+num2
//     // console.log("hitesh");
//     // return result
//     return num1+num2 

// }

// addtwonumbers(3,4)
// addtwonumbers(3,"a")
// addtwonumbers(3,null)//arguments 

// const result = addtwonumbers(3,5)
// console.log("result: ",result);

function loginusermessage(username="sam"){
    // if (username === undefined)
    if (!username)
    {
        console.log("please enter a username")
        return 

    }
    return `${username} just logged in`
};

console.log(loginusermessage())