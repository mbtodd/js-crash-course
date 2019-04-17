// Arrays - variables that hold multiple values

const fruits = [ 'apples', 'oranges', 'pears', '10', true ];

// add grapes after pears using es6
fruits[5] = 'grapes';
console.log(fruits);

//add mangos to end
fruits.push('mangos');
console.log(fruits);

// make a name your favorite fruit in a statement using array item
let myFav = `My favorite fruit is ${fruits[2]}.`;
console.log(myFav);

// check if this is an array
console.log(Array.isArray(fruits));

const name = 'John';
const age = 30;

//Template strings
const hello = `My name is ${name} and I'm ${age} years old.`;
console.log(hello);

// pull out Hello and make it upperCase
const s = 'Hello World';
console.log(s.substring(0, 5).toUpperCase());

// split each word into an array
// 'technology, computers, it , code';
const y = 'technology, computers, it, code';
const newY = y.split(', ');
console.log(newY);

//Arrays - turn this into an array: (1,2,3,4,5,6,7)
const newArr = new Array(1, 2, 3, 4, 5, 6, 6, 7);
const newNums = [ ...new Set(newArr) ];
console.log(newNums);

// Turn elements into an array using new Array

// object literals
const person = {
	firstName : 'John',
	lastName  : 'Doe',
	age       : 30,
	hobbies   : [ 'music', 'movies', 'sports' ],
	address   : {
		street : '50 main st',
		city   : 'Boston',
		state  : 'MA',
	},
};

// add an email property
person.email = 'john@gmail.com';
console.log(person);

// destructuring
const {firstName, lastName, hobbies: [], address: {street, city, state}} = person;
console.log(person.hobbies[0], person.address);

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
	console.log(todos[i].text);
}

// for of
for (const arr of todos) {
	console.log(arr.text);
}

// forEach, map, filter:

// forEach
todos.forEach((arr) => {
	console.log(arr.text);
});

// map
// const todoText = todos.map((arr) => {
// 	return arr.text;
// });
// console.log(todoText);
const todoText = todos.map((arr) => {
	return arr.text;
});
console.log(todoText);

// filter
const justFilter = todos.filter((arr) => {
	return arr.isCompleted === true;
});

console.log(justFilter);

// find the completed todo object and filter the text.
const todoFilter = todos
	.filter((arr) => {
		return arr.isCompleted === true;
	})
	.map((arr) => arr.text);
console.log(todoFilter);

const todoFilters = todos.filter((arr) => arr.isCompleted === true).map((arr) => arr.text);

console.log(todoFilters);

/* const todoFilter2 = todos
	.filter(function(arg) {
		return arg.isCompleted === true;
	})
	.map(function(arg) {
		arg.text;
	});
console.log(todoFilter2); */
