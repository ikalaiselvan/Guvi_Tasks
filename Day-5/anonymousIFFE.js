
// a.	Print odd numbers in an array:
(function(arr){
    let sum = [];
    for (value of arr){
       let dev = value % 2;

        if (dev == 1){
            sum.push(value);
        }
    }
   console.log(`A). Odd Numbers of given array is: ${sum}`);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// _________________________________________________________________//

// b.	Convert all the strings to title caps in a string array:
const titCaps = function(p) {
  // return p.toLowerCase().split(' ').map((word) => {
  //   console.log(word)
  //   let titCap =  (word.charAt(0).toUpperCase() + word.slice(1));
  //   return titCap;

  return p.map((word) => {
    let lower = word.toLowerCase()
    // console.log(lower.charAt(0), lower.slice(1))
    let titCap =  (lower.charAt(0).toUpperCase() + lower.slice(1));
    return titCap;
  }).join(' ');
}
let para = ["KALAI", "selvan", "ONE", 'two', "three"];
// let para = "Since childhood, he enjoyed flying, and was equally curious to know how birds fly in the air?";
console.log(`B). Tittle case : ${titCaps(para)}`);
// _________________________________________________________________//

// c.	Sum of all numbers in an array
(function(c) {
  let sum = 0;
  for ( value of c){
    sum = sum + value;
  }
  console.log(`C). Sum of all numbers in an array : ${sum}`);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// _________________________________________________________________//

// d.	Return all the prime numbers in an array:
function checkPrime(num){
  if (num == 1){
    return false;
  }

  for ( var i = 2; i < num; i++ ) {
    if ( num % i === 0 ) {
      return false;
    }
  }

  return true;
}

(function(arrr) {
  let prime = [];
  for(val of arrr){
    if(checkPrime(val)) {
      prime.push(val);
    }
}
console.log("D). Prime numbers of given array is : " , prime);
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
// _________________________________________________________________//

// e.	Return all the palindromes in an array:

(function(str){
  let palindromes = [];
  str.map((s) => {
    let rev = s.split("").reverse().join("");
    // console.log(rev)
    if (s === rev) {
      palindromes.push(s);
    }
  });
console.log(`E). Palindromes in given arrray : ${palindromes}`);
})(["one", "madam","two", "mam", "five", "dad", "hundred", "pop"])
// _________________________________________________________________//

// f.	Return median of two sorted arrays of the same size:

let getMedian = function (ar1, ar2, n) {
  var i = 0;
  var j = 0;
  var count;
  var m1 = -1;
  var m2 = -1;

  for (count = 0; count <= n; count++) {
    // console.log(i,j,n)
    if (i == n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j == n) {
      m1 = m2;
      m2 = ar1[0];
      break;
    }

    if (ar1[i] <= ar2[j]) {
      m1 = m2;
      m2 = ar1[i];
      // console.log("c:",count,"i:",i,"j:",j, "m1:", m1,"m2", m2,"ar1:", ar1[i], "ar2", ar2[j])
      i++;
      } else {
      m1 = m2;
      m2 = ar2[j];
      // console.log("c:",count,"i:",i,"j:",j,"m1:", m1,"m2", m2,"ar1:", ar1[i], "ar2", ar2[j])
      j++;
      }
    // console.log(count, m1, m2)
  }

  return (m1 + m2) / 2;
};
  
var ar1 = [1, 12, 15, 26, 38, 48];
var ar2 = [2, 13, 17, 30, 45, 65];

if (ar1.length == ar2.length){
  console.log("F). Median is :" , getMedian(ar1, ar2, ar1.length));
}else{
  console.log("F). Doesn't work for arrays of unequal size");
}
// _________________________________________________________________//

// g.	Remove duplicates from an array:
((ar) => {
  let filt = ar.filter((value,index) => ar.indexOf(value) === index);
    console.log("G). Removed duplicates : " , filt);
})(["17", "20", "kalai", "17", "kalai", "selvan", "20", "11"]);
// _________________________________________________________________//

// h.	Rotate an array by k times:
(function(k) {
  let array= [1, "k", 2,"a", 3, "l", 4, "a", 5, "i"];
  for(let i = 1; i <= k; i++){
    let forward = array.pop();   
    array.unshift(forward);   
  }
  console.log("H). Forward rotation by k times : " , array);
})(2);

(function(k) {
  let array= [1, "k", 2,"a", 3, "l", 4, "a", 5, "i"];
  for(let i = 1; i <= k; i++){
    let reverse = array.shift();   
    array.push(reverse);    
  }
  console.log("H). Reverse rotation by k times : " , array);
})(2);
// _________________________________________________________________//