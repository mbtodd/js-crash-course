// es6 Class

class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}
	getBirthYear() {
		return this.dob.getFullYear();
	}
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
const person3 = new Person('Michael', 'Todd', '08-03-1970');

console.log(person3.getBirthYear());
console.log(person3.getFullName());

// Better way to run a function inside of function

class Family {
	constructor(parent, children, pet, wife) {
		this.parent = parent;
		this.children = children;
		this.pet = pet;
		this.wife = wife;
	}
	getFullHouse() {
		return `${this.parent} ${this.children} ${this.pet} ${this.wife}`;
	}
}

const familyMember1 = new Family('Michael', 'Greyson', 'Dorothy', 'Jennifer');

console.log(familyMember1.getFullHouse());
console.log(familyMember1);
