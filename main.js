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



function powersOfTwo(n){
  let arr = [];
  let num = 1;
   for(let i = 1; i <= n; i++) {
      arr.push(num)
      num += num;
   } 
   arr.push(num)
   return arr
}

console.log(powersOfTwo(4))// [1, 2, 4, 8, 16]

