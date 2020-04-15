// const x = '6';
// const y = 11;

// if (x > 5 && y > 10) {
// 	console.log('x is more than 5 or y is more than 10');
// }

// ternary operator
/* ? = then  : = else */
const x = 9;

const color = 'green';
// console.log(color);

// switch
switch (color) {
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log('color is NOT red or blue');
		break;
}

/* Conditional (ternary) operator */

const getFee = isMember => (isMember ? '$2.00' : '$10.00');

console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(0));

let age = 20;
let beverage = age >= 21 ? 'Beer' : 'Juice';

console.log(beverage);

const smokeCrack = crackHead => (crackHead ? 'jail' : 'free');
console.log(smokeCrack(true))


const greeting = person => {
	let name = person ? person.name === string : 'stranger';
	return 'Howdy, ' + name;
};
console.log(greeting({ name: 10 }));


