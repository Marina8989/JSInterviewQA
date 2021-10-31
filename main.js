//1. what is the result?
//console.log(2 + '2'); //=> 22
//console.log(2 - '2'); //=> 0

//2. remove duplicate number from an array, but you are not allowd to use any loops, maps etc.

// let nums = [1,2,2,3]; // => should return [1,2,3]
// let uniqueNums = [... new Set(nums)];
// console.log(uniqueNums);


//3.make sur that var also becomes a block scoped like let
//the answer is you will have to put the block into an Emideately Invoked Function. 

// let func = function() {
  
//     {
//         (function() {
//            let l = 'let'
//            var v = 'var'
//         })(); 
//     }

//     console.log(l);
//     console.log(v);
// }
// func();

//4. What is the result?

// console.log(5 < 6 < 7);// true
// console.log(7 > 6 > 5); // false

//this is what happens under the hood:
// (5 < 6 < 7)  =>  (true < 7)  => (1 < 7)  => true
// (7 > 6 > 5)  =>  (true > 5)  => (1 > 5)  => false

//5. prevent user to add more properties to an object
//answer: use Object.freeze() for that
// in order to allow the user to modify the existing  property but still prevent adding new ones you can use Object.seal() instead
//in order to change only a specific property and leave the rest as they are use:  Object.defineProperty(profile, 'age', {
     // value: 3,
     //writable: false
//})

// let profile = {
//     name: 'techsith',
//     age: 3
// };

// Object.defineProperty(profile, 'age', {
//     value: 3,
//     writable: false
// })

//Object.freeze(profile)

//Object.seal(profile);

// profile.name = 'mar';
// profile.age = 4;

// console.log(profile);

//6. What is the answer of this?
// the answer is -infinity. Why is that? Math.max() needs to compare two numbres in order to choose the max one.
// if there are no numbers provided, the only option that is left is -infinity, and that is why it is returned.

//console.log(Math.max()) // -infinity




// let sortme = function(names) {
//    names.sort(function (a, b) {
//         return a.value > b.value;
//    })
// }
// console.log(sortme(['one', 'two', 'three' ])); // one three two


// function sortMe(arr) {
//     arr.sort((a, b) => { 
     
//     })
    
// }
// console.log(sortMe([1,4,2]));
//console.log(sortMe(['b','a','c']));



// function largestPairSum(numbers){
//   //TODO: Write your Code here
//   let max = Math.max(...numbers);
//   let x = numbers.indexOf(max);
//   let y = numbers.splice(x,1);
//   let maxx = Math.max(...numbers);
//   let sum = max + maxx;
//    return sum;
// }

// console.log(largestPairSum([10,14,2,23,19])) // 42 ;






// function sumAll(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let sum = 0;
//   for(let i = min; i <= max; i++) {
//      sum += i;
//   }
//   return sum;
// }

// console.log(sumAll([1, 4])); // 10
// console.log(sumAll([5, 10])); // 45
// console.log(sumAll([10, 5])); // 45




// function diffArray(arr1, arr2) {
//    var newArr = [];
   
//    function check(first, second) {
//       for(let i = 0; i < first.length; i++) {
//          if(second.indexOf(first[i]) == -1) {
//               newArr.push(first[i]);
//          }
//       }
//    }
//    check(arr1, arr2);
//    check(arr2, arr1);

//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //[4]
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));






// function destroyer(arr, ...args) {
//   return arr.filter(item => !args.includes(item))
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]




//function whatIsInAName(collection, source) {
  //var arr = [];
  // Only change code below this line
   
  // let srcKeys = Object.keys(source);
   
  // return collection.filter(obj => {
  //   return srcKeys.every(key => {
  //     return obj.hasOwnProperty(key) && obj[key] === source[key];
  //   })
  // })
   
  //return arr;
//}

//console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));




// function translatePigLatin(str) {

//   if (str.match(/^[aeiou]/)) return str + "way";

//   const consonantCluster = str.match(/^[^aeiou]+/)[0];
//   console.log(consonantCluster);
//   return str.substring(consonantCluster.length) + consonantCluster + "ay";
// }
  

// console.log(translatePigLatin("consonant")); // onsonantcay
// console.log(translatePigLatin("algorithm")); // algorithmway
// console.log(translatePigLatin("eight")); // eightway

// s

// function getChar(c) {
//   return String.
// }

// console.log(getChar(55)); // '7'



// const flip=(d, a)=>{
//     return a.sort((num1, num2) => {
//       if(d == 'R'){
//          return num1 - num2;
//       }if(d == 'L') {
//          return num2 - num1;
//       }
//     })
// }

// console.log(flip('R', [3, 2, 1, 2]));
// console.log(flip('L', [1, 4, 5, 3, 5]));


// function kaprekarSplit(n){
//   let sqr = String(Math.pow(n, 2));
//   let x = sqr.split('');
//   let y = x.slice(0, x.length/2);
//   let z = x.slice(x.length/2);
//   let sum = Number(y.join('')) + Number(z.join(''));
  
//   if(sum == n) {
//       return y.length;
//   }else {
//     return -1;
//   }  
// }

// console.log(kaprekarSplit(1)) // 0;
// console.log(kaprekarSplit(9)) // 1;
// console.log(kaprekarSplit(45)) //2;
// console.log(kaprekarSplit(2223)) //3;
// console.log(kaprekarSplit(5050)) // 4;
// console.log(kaprekarSplit(5051)) // -1;
// console.log(kaprekarSplit(99999)) // 5;



// 9: 9^2=81 and 8+1=9.
// 45: 45^2=2025 and 20+25=45
// 2223: 2223^2=4941729 and 494+1729=2223



// function removeChar(str){
//   let arr = str.split('');
//   arr.pop();
//   arr.shift();
//   return arr.join('');
  
// };

// console.log(removeChar('eloquent')) //loquen
// console.log(removeChar('country')) // ountr



// function firstNonConsecutive (arr) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i]+ 1 !== arr[i + 1]) {
//       return arr[i + 1];
//    }
//   }
//   return null;
// }

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]));



// function multiTable(number) {
//   let str = '';
//   for(let i = 1; i <= 10; i++) {
//       str+=`${i} * ${number} = ${i* number}\n`
//   }
//   return str;
// }

// console.log(multiTable(5)) // '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'
// console.log(multiTable(1))
// console.log(multiTable(7))



// function powersOfTwo(n){
//   let arr = [];
//   let num = 1;
//    for(let i = 1; i <= n; i++) {
//       arr.push(num);
//       num += num;
//    } 
//    arr.push(num);
//    return arr;
// }

// console.log(powersOfTwo(4))// [1, 2, 4, 8, 16]

// function multiplesOf3and5(number) {
//    let sum = 0;
//    for(let i = 0; i < number; i++) {
//       if(i % 5 == 0 || i % 3 == 0 ) {
//         sum += i;
//      }
//    }
//    return sum;
// }

// console.log(multiplesOf3and5(1000));


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.


// function fiboEvenSum(n) {
//     fiboEvenSum(n-1);
//     console.log(n, n-1);
    
// }

// console.log(fiboEvenSum(8)); // 10
// // console.log(fiboEvenSum(10));  // 10
// // console.log(fiboEvenSum(34)); // 44
// // console.log(fiboEvenSum(60)); // 44

// const diff = (arr1, arr2) => [
//    ...arr1.filter(e => !arr2.includes(e)),
//    ...arr2.filter(e => !arr1.includes(e))
// ]

// function sym(...args) {
//     let arr = [...new Set(args.reduce(diff))]
//     let newArr = arr.sort((a, b) => a - b);
//     return newArr;
// }
  

//console.log(sym([1, 2, 3], [5, 2, 1, 4])); //[3, 4, 5]


// function fiboEvenSum(n) {
//   let sum = [];
//   let feb = 1;
//     for(let i = 0; i < n; i++) {
//       console.log(i);
//       console.log(feb + i);
//       sum.push(feb+i);
//       console.log(sum);
//       feb = i;
//     }
// }
// console.log(fiboEvenSum(8));


// function digitize(n) {
//   let str = String(n).split('').reverse();
//   let arr = [];
//   str.forEach(num => {
//     arr.push(Number(num));
//   })
//   return arr;
// }
// console.log(digitize(35231)) // [1,3,2,5,3];

// var replaceDots = function(str) {
//   let arr = str.split('.').join('-');
//  return arr;
// }
// console.log(replaceDots("one.two.three")); //"one-two-three"



// function squareSum(numbers){
//   let sum = 0;
//   numbers.forEach(num => {
//     let x = Math.pow(num, 2);
//     sum += x;
//   })
//   return sum
// }
// console.log(squareSum([1,2])); // 5


// function countBy(x, n) {
//   let arr = [];
//   let num = x * n;
//   for(let i = x; i < num; i+x) {
//      arr.push(i);
//   }
//   //console.log(num);
// }
// console.log(countBy(1,10)) // [1,2,3,4,5,6,7,8,9,10]
// console.log(countBy(2,5)) // [2,4,6,8,10]



// function isLeapYear(year) {
//   if(Number.isInteger(year / 4) || Number.isInteger(year / 400)) {
//        return true;
//   }else {
//     return false;
//   }
  
// }
// console.log(isLeapYear(1234)); // false, 'Year 1234'
// console.log(isLeapYear(1984)); // true, 'Year 1984'


// function getArr(arr, target) {
//   let newArr =[];
//    for(let i = 0; i < arr.length-1; i++) {
//       for(let j = i+1; j < arr.length; j++) {
//         if(arr[i] + arr[j] == target){
//           newArr.push(i, j);
//         }
//       }
//    }
//    return newArr;
// }
// console.log(getArr([2,7,11,15], 9)) // [0,1]
// console.log(getArr([3,2,3], 6)) // [0,2]
// console.log(getArr([3,2,4], 6)); // [1,2]


// var reverse = function(x) {
//   const str = String(x).split('').reverse();
  
//   if(str == '0') {
//     return Number(str);
//   }
//   if(str[str.length -1] == '-' ) {
//     str.pop();
//     str.unshift('-');
//     return Number(str.join(''));
//   }
//   if(str[0] == '0') {
//     str.shift();
//     return Number(str.join(''));
//   }
//   return Number(str.join(''));
// };

// console.log(reverse(321)) // 123
// console.log(reverse(-321)) // -123
// console.log(reverse(120)) // 21
// console.log(reverse(0)) // 0


// var romanToInt = function(s) {
//   let m = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000
//   }
   
//     let ans = m[s[0]];
    
//     for (let i = 1; i < s.length; i++) {
//         let prevChar = s[i-1];
//         let char = s[i];
//         if (m[prevChar] < m[char]) ans += m[prevChar + char] - m[prevChar]; // for the edge cases (IV)
//         else ans += m[char];
//     }
//     return ans;
// } 
// console.log(romanToInt('III')); //3
// console.log(romanToInt("LVIII")); // 58
// console.log(romanToInt("MCMXCIV")); //1994



// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.



// var addTwoNumbers = function(l1, l2) {
//   let newArr = [];

//   for(let i = l1.length-1; i >= 0; i--) {
//     //console.log(l1[i]);
//     for(let j = l2.length-1; j >= 0; j--) {
//      console.log(l2[j]);
//      newArr.push(l1[i] + l2[j]);
//     }
//   }
//     console.log(newArr)
// };
// console.log(addTwoNumbers([7,2,4,3], [5,6,4])); // [7,8,0,7]



// function mxdiflg(a1, a2) {
//     let randNumOne = Math.floor(Math.random() * a1.length);
//     let randNumTwo = Math.floor(Math.random() * a2.length);

//     if(!randNumOne || !randNumTwo) {
//         return -1;
//     }else {
//        let num = Math.abs(randNumOne - randNumTwo)
//        return num;
//     }
// }

//  var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
//  var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

// console.log(mxdiflg(s1, s2)); // 13


// var mergeTwoLists = function(l1, l2) {
//     let x = l1.concat(l2);
//     return x.sort((a,b) => {
//       return a - b;
//     })
    
// };

// console.log(mergeTwoLists([1,2,4],[1,3,4])) // [1,1,2,3,4,4]


// function seatsInTheater(nCols, nRows, col, row) {
//     let x = nCols.splice(col);
//     console.log(x);
// }

// console.log(seatsInTheater(16, 11, 5, 3));


// For nCols = 16, nRows = 11, col = 5, and row = 3, the output should be
// seatsInTheater(nCols, nRows, col, row) = 96.


// function maxMultiple(divisor, bound) {
//    let x = 0;
//    for(let i = divisor; i <= bound; i+=divisor) {
//       x += divisor;
//    }
//   return x;
// }

// console.log(maxMultiple(3, 10))


// function circleOfNumbers(n, firstNumber) {
//    return ((n-1) - firstNumber);
// }
// console.log(circleOfNumbers(10, 2));


// function pageLoad() {
//   //document.getElementById('text').value = localStorage.getItem('food');
//   document.getElementById('option').value = localStorage.getItem('food');

//   //document.getElementById('text').addEventListener('input', loadedInput);
//   document.getElementById('option').addEventListener('change', loadedInput);
// }

// function loadedInput(e) { 
//   localStorage.setItem('food', e.target.value);
// }

//document.addEventListener('DOMContentLoaded', pageLoad)




// const app = document.getElementById('app'); // don't forget to create an html element
// fetch('https://rickandmortyapi.com/api/episode/4')
//   .then(response => response.json())
//   .then(json => {
//     app.innerText = json.episode
//   })

// async function info() {
//   const div = document.createElement('div');
//   const pic = document.createElement('img');
//   const body = document.querySelector('body');
//   try{
//       const responce = await fetch('https://dog.ceo/api/breeds/image/random');
//       const data = await responce.json();
//       console.log(data);
//       pic.setAttribute('src', data.message);
//       div.append(pic);
//       body.append(div);
//   }catch(error){
//       console.log('error:', error)
//   }

  
//   pic.setAttribute('src', data.message);
//   div.append(pic);
//   body.append(div);
//   console.log(data);
//   console.log(data.message);
//   console.log(data.status);
// }

// async function resp() {
//    const x = info();
//    return x;
// }
// resp();



// const sentence = 'Hi i am Marina and i live in San Francisco';

// function getMostRepeatedChar(string) {
//     let count = 0;
//     let splittedString = string.split('');
//     console.log(splittedString);
//  }
// console.log(getMostRepeatedChar(sentence))





// function checkPalindrome(inputString) {
//   let word = [];
//   let arr = inputString.split('');
//   for(let i = arr.length-1; i>=0; i--){
//       word.push(arr[i])
//   }
 
//      if(word.join('') === arr.join('')){
//        return true;
//      }else{
//        return false;
//      }
// }
// console.log(checkPalindrome("aabaa"));
// console.log(checkPalindrome("abac"));

// const inputArray = [3, 6, -2, -5, 7, 3];

// function adjacentElementsProduct(arr) {
//   const arrNum = [];
//   for(let i = 0; i < arr.length-1; i++){
//      const productArr = arr[i] * arr[i+1];
//      arrNum.push(productArr);
//   }
//   return Math.max(...arrNum);
// }

// console.log(adjacentElementsProduct(inputArray)); // 21







// One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.

// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

// Example

// For n = 240, the output should be
// lateRide(n) = 4.

// Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.

// For n = 808, the output should be
// lateRide(n) = 14.

// 808 minutes mean that it's 13:28 now, so the answer should be 1 + 3 + 2 + 8 = 14.

// function lateRide(n) {
//    let num = Math.floor((n / 60));
//    console.log(num);
//    let x = (1439 - (num * 60));
//    console.log(x)
//    let y = (num.toFixed().toString() + x.toFixed().toString()).split('')
//    console.log(y);
//    let sum = 0;
   
//    for(let i = 0; i < y.length; i++) {
//         sum += Number(y[i])
//    }
//      return sum;
// }
// console.log(lateRide(808));
// console.log(lateRide(240));
// console.log(lateRide(1439)); //19



// function makeArrayConsecutive2(statues) {
//     const sortedArr = statues.sort((a,b) => {
//         return a - b;
//     })
//     let num = 0;
//     let arrEl = sortedArr[0];
    
//     for(let i = 0; i < sortedArr.length; i++) {
//       if(arrEl !== sortedArr[i]) {
//          num+=1;
//          arrEl = sortedArr[i];
//       }
//     }
//     return num;
// }
// console.log(makeArrayConsecutive2([6, 2, 3, 8]))
// console.log(makeArrayConsecutive2([0, 3]))


// function makeArrayConsecutive2(sequence) {
//   console.log(Math.max(...sequence))
//   console.log(Math.min(...sequence))
//   let x =  Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
//   console.log(x)
// }
// console.log(makeArrayConsecutive2([6, 2, 3, 8])) //3
// console.log(makeArrayConsecutive2([0, 3])) //2


function almostIncreasingSequence(sequence) {
    const sorted = sequence.sort((a,b) => {
      return a - b;
    })
    console.log(sorted)

    if(sorted === sequence) {
       console.log(true)
    }else {
       console.log(false)
    }
    
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))// false
console.log(almostIncreasingSequence([1, 3, 2])) // true