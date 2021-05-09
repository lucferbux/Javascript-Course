console.log("Sets & Array modification");

// 1. Remove the duplicates of this array without using looping and reduce
let nums = [1, 2, 2, 3, 3, 4, 5]

// You can use Set
console.log([... new Set(nums)]);


// 2. Now add "start" at the start of the array and "end" at the end of the array


nums = ["start", ...nums, "end"];

console.log(nums);


