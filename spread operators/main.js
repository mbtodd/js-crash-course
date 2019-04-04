let x = [ 1, 2, 3, 4 ];
let y = [ 5, 6, 7 ];

console.log([ ...x, ...y ]);
console.log(x.concat(...y));

let func = function(...arg) {
	console.log(arg);
};

func(x);

console.log(Math.hypot(3, 4));

//house

this.table = 'window table';
console.log(window.table);
