const user={
    username:"abhiwak",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username} ,welcome to website` )
        console.log(this);
    }

    
}

// user.welcomemessage()
// user.username="hitesh"
// user.welcomemessage()

// console.log(this)

// function chai(){
//     // console.log(this)
//     let userfullname="abhiwak"
//     console.log(this.username)
// }
// chai();

const chai = () => {
    let userfullname="abhiwak"
    console.log(this)

}


// chai()

const addtwo()=>