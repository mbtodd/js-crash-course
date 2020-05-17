// apply() method example
var numbers = [1, 2, 3, 4, 5];

console.log.apply(console, numbers);

console.log("1", "2", "3", "4", "5");



// spread operator example
var numbers2 = [1, 2, 3, 4, 5];
 
console.log(...new Set(numbers2));


// Create new array from existing array
let origArrayOne = [1, 2, 3];
let origArrayTwo = [4, 5, 6];

//Create new array from existing array
let copyArray = [...origArrayOne];

//Create new array from existing array + more elements
let newArray = [...origArrayOne, 7, 8];

//Create array by merging two arrays
let mergedArray = [...origArrayOne, ...origArrayTwo];