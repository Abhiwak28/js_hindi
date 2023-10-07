//immediately invoked function expressions 

(function chai(){
    //named iife
    console.log("db connected");
})();

//syntax : ()();
//global execution ke pollution 

( function aurcode () {
    console.log('db connectedc to')
})();

(  () => {
    console.log('db connectedc to ')
})();

(  (name) => {
    console.log(`db connectedc to ${name} `)
})('abhiwak');