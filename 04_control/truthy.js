// const useremail ="a@gmail.com"

// if (useremail) {
//     console.log("got user email")
// }
// else{
//     console.log("dont have user email");
// }
//  koi true ki zarurat nahi hai ...uske bina he karliya 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// with an empty array,lekin empty string will not run-
const useremail =[]

// if (useremail) {
//     console.log("got user email")
// }
// else{
//     console.log("dont have user email");
// }


// falsy values :
// false ,0,-0,BigInt 0n,"",null,undefined,nan 

// truthy values 
// "0",'false'," ",[],{},function(){}

if (useremail.length===0){
    console.log("array is empty");

}

// for object

const emptypbject ={}

if(Object.keys(emptypbject).length===0){
    console.log("object is empty");
}
// keys array bnadeta hai object me 
// false==0 : true 
// false=='' : true 
// 0=='' : true 


// ++++++++++++++++++++++++++++++++++++++++++++++++
