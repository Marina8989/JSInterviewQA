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

let profile = {
    name: 'techsith',
    age: 3
};

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




function frankenSplice(arr1, arr2, n) {
      let arr3 = arr2.slice();
      console.log(arr3.splice(0, n).concat(arr1).concat(arr3.splice(0)));
      console.log(arr2);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1));//  ["a", 1, 2, "b"]

  