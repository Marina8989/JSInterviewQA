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



const flip=(d, a)=>{
    return a.sort((num1, num2) => {
      if(d == 'R'){
         return num1 - num2;
      }if(d == 'L') {
         return num2 - num1;
      }
    })
}

console.log(flip('R', [3, 2, 1, 2]));
console.log(flip('L', [1, 4, 5, 3, 5]));