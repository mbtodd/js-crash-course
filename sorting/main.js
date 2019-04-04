var letters = [ 'R', 'O', 'F', 'L' ];

console.log(letters.sort());

// alert(letters);

var numbers = [ 8, 5 ];

numbers.sort(function(a, b) {
	return a < b;
});

console.log(numbers); //produces [5,8]

console.log(numbers.sort());

var numbers = [ 4, 3, 5, 9 ];

numbers.sort((a, b) => {
	return b < a;
});

console.log(numbers);

var shapes = [ [ 5, 'Pentagon' ], [ 3, 'Triangle' ], [ 8, 'Octagon' ], [ 4, 'Rectangle' ] ];

shapes.sort((a, b) => {
	return a[0] < b[0];
});
console.log(new Set(shapes));

//
/*  */

var shapes = [ [ 4, 'Trapezium' ], [ 5, 'Pentagon' ], [ 3, 'Triangle' ], [ 4, 'Rectangle' ], [ 4, 'Square' ] ];

shapes.sort(function(a, b) {
	if (a[0] === b[0]) {
		var x = a[1].toLowerCase(),
			y = b[1].toLowerCase();

		return x < y ? -1 : x > y ? 1 : 0;
	}
	return a[0] - b[0];
});

console.log(shapes);
