

//Object.entries()

// syntax
// Object.entries(obj)

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

const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj1)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type, since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj3 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj3)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});


//converting an object to a map
const obj4 = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj4));
console.log(...new Set(map)); // Map { foo: "bar", baz: 42 }


// Iterating through an Object
// Using Array Destructuring, you can iterate through objects easily.

const obj6 = { foo: 'bar', baz: 42 };
Object.entries(obj6).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"