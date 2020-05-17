function addNums(num1, num2) {
	return num1 + num2;
}

console.log(addNums(23, 4));

const addNums2 = (num1, num2) => {
	return num1 * num2;
};
console.log(addNums2(100, 500));

// arrow function short hand (use if there is just one expression, no variables)

const addNumsShort = (num1, num2) => num1 + num2;

console.log(addNumsShort(25, 23));

const fruits = [ 'apples', 'oranges', 'pears', '10', true ];

fruits.forEach((todo) => console.log(todo));

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

const pullOut = todos.forEach((arr) => {
	console.log(arr.text);
	return arr.text;
});

// lexical this

// exp;
