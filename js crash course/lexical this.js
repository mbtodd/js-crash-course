// Constructor function
function Person(firstName, lastName, address, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.address = address;
	this.dob = new Date(dob);
	this.BirthYear = function() {
		return this.dob.getFullYear();
	};
	this.getFullName = function() {
		return `${this.firstName} ${this.lastName} `;
	};
	this.nameAddress = function() {
		return `${this.firstName} ${this.lastName} ${this.address}`;
	};
}

// es6 Class

// class Person {
// 	constructor(firstName, lastName, address, dob) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.address = address;
// 		this.dob = new Date(dob);
// 	}
// 	getBirthYear() {
// 		return this.dob.getFullYear();
// 	}
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// Instantiate object
const person1 = new Person('John', 'Doe', '123 Stone Street', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3443 Alabama Street', '3-6-1970');
const person3 = new Person(
	'Michael',
	'Todd',
	'46617 Stonehelm ct, Sterling, VA',
	'08-03-1970'
);

console.log(person3.BirthYear());
console.log(person1.firstName);
console.log(person3.getFullName());
console.log(person3.address);

// Better way to run a function inside of function

function Family(parent, children, pet) {
	this.parent = parent;
	this.children = children;
	this.pet = pet;
	Family.prototype.fullHouse = function() {
		return `${this.parent} ${this.children} ${this.pet}`;
	};
}

const familyMember1 = new Family('Michael', 'Greyson', 'Dorothy');

console.log(familyMember1.fullHouse());
console.log(familyMember1);
