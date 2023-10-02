const name = "abhiwak"
const repoCount = 50 


// console.log(name+repoCount+" value");(dont right like this)

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// string declaration\

const gamename = new String('abhiwak-tiw-yui-pat-yu')
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt([2]));
console.log(gamename.indexOf('i'));

const newstring = gamename.substring(0,4)
console.log(newstring);
// 4th value not included !!

const anotherString = gamename.slice(-9,4)
console.log(anotherString);

const newstringOne = "  hitesh      "
console.log(newstringOne);
console.log(newstringOne.trim());

const url= "https://abhiwak.com/abhiwak%20tiwari"
url.replace('%20','-')
console.log(url.replace('%20','-'));
console.log(url.includes('tiwari'));

console.log(gamename.split('-'));
