var letters = [ 'R', 'O', 'F', 'L'];

letters[4] = ''

console.log([...new Set(letters.sort())]);

// alert(letters);

var numbers = [ 8, 5 ];

numbers.sort(function(a, b) {
	return a < b;
});

console.log(numbers); //produces [5,8]

console.log(numbers.sort());

var numbers = [ 4, 3, 5, 9 ];

const newNum = numbers.sort((a, b) => b < a);

console.log(newNum);

var shapes = [ [ 5, 'Pentagon' ], [ 3, 'Triangle' ], [ 8, 'Octagon' ], [ 4, 'Rectangle' ] ];

shapes.sort((a, b) => {
	return a[0] < b[0];
});
const newShapes = shapes.sort((a, b) => a[0] < b[0]);

console.log(new Set(shapes));
console.log([...new Set(newShapes)]);

//
/*  */

var shapes = [ [ 4, 'Trapezium' ], [ 5, 'Pentagon' ], [ 3, 'Triangle' ], [ 4, 'Rectangle' ], [ 4, 'Square' ], [ 0,'hello'] ];

shapes.sort(function(a, b) {
	if (a[0] === b[0]) {
		let x = a[1],
			y = b[1];

		return x < y ? -1 : x > y ? 1 : 0;
	}
	return a[0] - b[0];
});

console.log(shapes);
