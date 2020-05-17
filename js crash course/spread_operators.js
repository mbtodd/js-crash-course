// apply() method example
var numbers = [1, 2, 3, 4, 5];
console.log.apply(console, numbers);
console.log("1", "2", "3", "4", "5");



// spread operator example
var numbers2 = [1, 2, 3, 4, 5];
 console.log(...new Set(numbers2));


// Create new array from existing array

// Create new array from existing array
let origArrayOne = [1, 2, 3];
let origArrayTwo = [4, 5, 6];
console.log(origArrayTwo)

//Create new array from existing array
let copyArray = [...origArrayOne];
console.log(copyArray)

//Create new array from existing array + more elements
let newArray = [...origArrayOne, 7, 8];
console.log(newArray)

//Create array by merging two arrays
let mergedArray = [...origArrayOne, ...origArrayTwo];
console.log(mergedArray)


// Create new object from existing object

let origObjectOne = { a: 1, b: 2, c: 3 };                 //{a: 1, b: 2, c: 3}
let origObjectTwo = { d: 4, e: 5, f: 6 };                 //{d: 4, e: 5, f: 6}

//Create new object from existing object
let copyObject = { ...origObjectOne };                        //{a: 1, b: 2, c: 3}

//Create new object from existing object + more elements
let newObject = { ...origObjectOne, g: 7, h: 8 };             //{a: 1, b: 2, c: 3, g: 7, h: 8}

//Create object by merging two objects
let mergedObject = { ...origObjectOne, ...origObjectTwo };    //{a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}


// Object destructuring example
function myFunction(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

var parametersArray = [0, 1, 2];

myFunction(...parametersArray);
console.log(...parametersArray)


// object entries

const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed