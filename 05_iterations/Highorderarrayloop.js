// for of 

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "HELLO"
// for (const greet of greetings) {
//     console.log(`EACH char is ${greet}`);
    
// }

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA ")
map.set("fr","france")

// console.log(map);
for (const [key,value] of map) 
{
console.log(key,":-",value)    
}

const myobj ={
    'game1':'nfs',
    'game2':'gta'
}

for (const [key,value] of myobj) {
    console.log(key,":-",value);
    
}
// for of object me kaaam nahi karta hai 
// NO ITERATION ON MAP 