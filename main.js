//1. what is the result?
//console.log(2 + '2'); //=> 22
//console.log(2 - '2'); //=> 0

//2. remove duplicate number from an array, but you are not allowd to use any loops, maps etc.

// let nums = [1,2,2,3]; // => should return [1,2,3]
// let uniqueNums = [... new Set(nums)];
// console.log(uniqueNums);


//3.make sur that var also becomes a block scoped like let

let func = function() {
  
    {
        (function() {
           let l = 'let'
           var v = 'var'
        })(); 
    }

    console.log(l);
    console.log(v);
}
func();