// Arrays - variables that hold multiple values

const fruits = [ 'apples', 'oranges', 'pears', 10, true ];

// add grapes after pears using es6

fruits[5] = 'grapes';

console.log(fruits);

//add mangos to end
fruits.push('mangos');

console.log(fruits);

// make a name your favorite fruit in a statement using array item

let myFruit = `My favorite fruits are ${fruits[2]} and ${fruits[6]}.`;
console.log(new Array(myFruit));

// check if this is an array
console.log(Array.isArray(fruits));

//Template strings
const name = 'John';
const age = 30;

const nameAge = `My name is ${name} and I'm ${age} years old.`;
console.log(nameAge);

// pull out Hello and make it upperCase
const s = 'Hello World';

console.log(s.substring(0, 5).toUpperCase());

// split each word into an array
// 'technology, computers, it , code';
const y = 'technology, computers, it, code';
console.log(y.split(', '));

//Arrays - turn this into an array: (1,2,3,4,5,6,7)
const nums = new Array(1, 2, 3, 4, 5, 6, 7);
console.log(nums);

// reverse the new arrays numbers;
const orderNums = nums.sort((a, b) => a < b);
console.log(orderNums);

// Turn elements into an array using new Array

// object literals
const person = {
	firstName : 'John',
	lastName  : 'Doe',
	agge      : 30,
	hobbies   : [ 'music', 'movies', 'sports' ],
	address   : {
		street : '50 main st',
		city   : 'Boston',
		state  : 'MA',
	},
};

// add an email property
person.email = 'john@gmail.com';
console.log(person.address.street);

const nameString = `${person.firstName} ${person.lastName} lives at ${person.address.street} ${person.address.city}`;
console.log(nameString);

// destructuring
// const {firstName, lastName, agge, hobbies: [], address: {street, city, state}, email} = person;
console.log(person.firstName, person.lastName, person.hobbies[0], person.address.street, person.email);

const todos = [
	{
		id          : 1,
		text        : 'Take out trash',
		isCompleted : true,
	},
	{
		id          : 2,
		text        : 'Meeting with boss',
		isCompleted : true,
	},
	{
		id          : 3,
		text        : 'Dentist appt',
		isCompleted : false,
	},
];
// for loop
for (let i = 0; i < todos.length; i++) {
	console.log(todos[i].text)
	
}

// for of
for (const arr of todos) {
	console.log(arr.text)
}

// forEach, map, filter:

// forEach

// map
// const todoText = todos.map((arr) => {
// 	return arr.text;
// });
// console.log(todoText);

// filter

// find the completed todo object and filter the text.
