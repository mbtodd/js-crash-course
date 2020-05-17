// Arrays - variables that hold multiple values

let fruits = [
	'apples',
	'oranges',
	'pears',
	'10',
	true
];

let favFruits = `Here is a list of my favorite fruits: ${fruits[2]}`;
 console.log(favFruits);


// add grapes after pears using es6:
// fruits[3] = 'grapes';
fruits.splice(2, 0, 'pig', 'dog', 'rat');
let fruitAnimals = fruits.slice(2, 5);
console.log(fruits);
console.log(fruitAnimals);
//add mangos to end:
fruits.push('mangos');
console.log(fruits);

// make a name your favorite fruit in a statement using array item:
let myFav = `My favorite fruit is ${fruits[4]}.`;
console.log(myFav);

// check if this is an array:
let isArr = Array.isArray(fruits);
console.log(isArr);

console.log(Array.isArray(fruits));

/* ---------------- */

const name = 'John';
const age = 30;
const homeTown = 'Sterling, VA';

//Template strings
/* state name and age using a template string: */
let nameAge = `My name is ${name} and I am ${age} years old. Im from`;
console.log([
	...[
		nameAge
	]
]);

// pull out Hello and make it upperCase:
const s = 'Hello World';
console.log(s.substring(0, 5).toUpperCase());

// split each word into an array
// 'technology, computers, it , code':
const y = 'technology, computers, it, code';
console.log(y.split(', '));

//Arrays - turn this into an array: (1,2,3,4,5,6,7):
const newNum = new Array(60, 2, 3, 5, 1, 4, 1, 5, 6, 7, 30);
const numArr = [
	...new Set(newNum)
];
let numOrder = numArr.sort((a, b) => {
	return a > b;
});

console.log(numArr);
console.log(numOrder);

// Turn elements into an array using new Array:

/* -------------------------- */

// object literals
const person = {
	firstName : 'John',
	lastName  : 'Doe',
	age       : 30,
	hobbies   : [
		'music',
		'movies',
		'sports'
	],
	address   : {
		street : '50 main st',
		city   : 'Boston',
		state  : 'MA'
	}
};

// add an email property:

person.email = 'greyon@att.net';
console.log(person.email, person.firstName);

// destructuring:
const { firstName, lastName, hobbies: [], address: { street, state } } = person;
console.log(person.hobbies[1], person.firstName, person.lastName, person.address.street );

const todos = [
	{
		id          : 1,
		text        : 'Take out trash',
		isCompleted : true
	},
	{
		id          : 2,
		text        : 'Meeting with boss',
		isCompleted : true
	},
	{
		id          : 3,
		text        : 'Dentist appt',
		isCompleted : false
	}
];
// for loop:
for (let i = 0; i < todos.length; i++) {
	console.log(todos[i].text);
}

// for of:

for (const arr of todos) {
	console.log(arr.text);
}

// forEach, map, filter

// forEach:
todos.forEach(arr => {
	console.log(arr.text);
});

// map:
const todoText = todos.map(arr => {
	return arr.text;
});

console.log(todoText);

// filter:

// find the completed todo object and filter the text:
const todoFilter = todos.filter(arr => {});

let todoArray = Array.isArray(todoFilter)
 console.log(todoArray);
