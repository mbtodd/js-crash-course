// Arrays - variables that hold multiple values

const fruits = [ 'apples', 'oranges', 'pears', '10', true ];

fruits[3] = 'grapes';
fruits.push('mangos');

const tony = `my name is ${fruits[2]}`;
console.log(tony);

console.log(fruits[3]);
console.log(Array.isArray(fruits));

const name = 'John';
const age = 30;

//Template strings
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

const s = 'Hello World';

console.log(s.substring(0, 5).toUpperCase());

const y = 'technology, computers, it , code';
console.log(y.split(', '));

//Arrays - variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// object literals

const person = {
	firstName : 'John',
	lastName  : 'Doe',
	age       : 30,
	hobbies   : [ 'music', 'movies', 'sports' ],
	address   : {
		street : '50 main st',
		city   : 'Boston',
		state  : 'MA'
	}
};

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// destructuring

const { firstName, lastName, address: { city } } = person;
console.log(city);

person.email = 'john@gmail.com';

console.log([ ...person.address.city, person.address.state ]);
console.log(person.email);

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
// for loop
for (let i = 0; i < todos.length; i++) {
	console.log(todos[i].text);
}

// for of
for (const todo of todos) {
	console.log(todo.text);
}

// forEach, map, filter:
todos.forEach((todo) => {
	console.log(todo.text);
});

// map
const todoText = todos.map((todo) => {
	return todo.text;
});
console.log(todoText);

// filter
const todoCompleted = todos
	.filter((arr) => {
		return arr.isCompleted === true;
	})
	.map((arr) => {
		return arr.text;
	});

console.log(todoCompleted);

//

console.log(todos);

console.log(todos[0].isCompleted);

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

// For loop
for (let i = 0; i <= 10; i++) {
	// console.log(`For Loop Michael: ${i}`);
	console.log(`Number: ${i}`);
}

// While
let i = 0;
while (i < 50) {
	console.log(`While Loop Number: ${i}`);
	i++;
}

// template string
console.log(`This is a Template String: ${hello}`);
