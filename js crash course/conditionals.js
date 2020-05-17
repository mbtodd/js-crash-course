let m = '6';
let t = 11;

if (m > 5 && t > 10) {
	console.log('m is more than 5 or t is more than 10');
}

// ternary operator
/* ? = then  : = else */
const x = 9;

const color = 'black';
console.log(color);

// switch
switch (color) {
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	case 'green':
		console.log('color is green');
		break;
	case 'purple':
		console.log('color is purple');
		break;
	default:
		console.log('color is NOT red, blue, green, or purple');
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


// const greeting = person => {
// 	let name = person ? person.name === string : 'stranger';
// 	return 'Howdy, ' + name;
// };
// console.log(greeting({ name: 'michael'}));






