const coding = ["js","ruby","java",'cpp']

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr)
// })

const myCoding =[
    {
        langname: "javascript",
        langfilename:"js"

    },
    {
        langname: "java",
        langfilename:"java"

    },
    {
        langname: "python",
        langfilename:"py"

    }
]

myCoding.forEach( (item)=>{
    console.log(item.langname);
})