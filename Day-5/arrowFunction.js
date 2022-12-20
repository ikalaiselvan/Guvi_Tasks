// Arrow function:

// _________________________________________________________________//
// A). Find odd Numbers in an Array
let array = [1,2,3,4,5,6,7,8,9,10];

const oddn = (n) => {
let oddNumbers = [];
  for (val of n) {
    if ((val % 2) != 0) {
      oddNumbers.push(val);
    }
  }
  console.log(`A). Odd Numbers : ${oddNumbers}`)
};
oddn(array);
// _________________________________________________________________//

// B). Find all the strings to title caps in the string array

let stArray = ["KALAI", "selvan", "ONE", 'two', "three"];

const titleCaps = (s)=>{
    let aa = []
    for(val of s){
        const lower = val.toLowerCase();
        const titleCap = lower.charAt(0).toUpperCase() + lower.slice(1);
        aa.push(titleCap)
    }
    console.log(`B). Title caps : ${aa}`);
}
titleCaps(stArray);
// _________________________________________________________________//

// C). Sum of all numbers in an array:

const sumArray = (s) =>{
    let cum = 0
    for(val of s){
        cum = cum + val;
    }
    console.log(`C). Sum of an Array is : ${cum}`)
}
sumArray([1,2,3,4,5,6,7,8,9,10]);
// _________________________________________________________________//

// D). Return all the Prime numbers in an array:
const check = () => {
    if (val == 1) {
        return true;
      }
    for(let i = 2; i < val; i++){
        if((val % i) === 0){
            return false;
        }
    }
    return true;
}
const primeNumber = (a) => {
    let initial = [];
    
    for (val of a) {
      if (check(val)) {
        initial.push(val);
      }
    }
console.log("D). Prime Numbers : " + initial)
}
primeNumber([1,2,3,4,5,6,7,8,9,10])
// _________________________________________________________________//

// E). Check the all palindromes in an Array

let p = ['run', 'nun', 'madam', 'radar', 'ball', 'rar']

const palin = (s) => {
  let initi = [];
  s.map((k) => {
    let rev = k.split("").reverse().join("");

    if (k == rev) {
      initi.push(k);
    }
  });
  console.log("E). Palindrom : " + initi);
};
palin(p);