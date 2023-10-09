const isuserloggedin = true
const debitcard = true 
const loggedinfromgoogle= false
const loggedinfromemail = true 

if(isuserloggedin && debitcard && 2==2){
    console.log("allowed to buy courses");
}

if(loggedinfromemail || loggedinfromgoogle){
    console.log("user loggedin");
}