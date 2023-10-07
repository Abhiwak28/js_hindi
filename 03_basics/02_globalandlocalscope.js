// // var c=300
// let a=300
// if (true){
//     let a = 10
//     const b=20
//     console.log(a);
// }

// // for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// } 
// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username ="abhiwak"

//     function two(){
//         const website = "youtube"
//         console.log(username);

//     }
//     // console.log(website);
//     two()


// }

// one()

if(true){
    const username = "abhiwak"
    if(username ==="hitesh"){
        const website ="youtube"
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);
// +++++++++++++++++intresting+++++++++++++++++++++++++

function addone(num){
    return num + 1 
}

console.log(addone(5))


// console.log(addtwo(5))//hoisiting
console.log(addtwo(5))
const addtwo = function(num){
    return num+2
}

console.log(addtwo(5))