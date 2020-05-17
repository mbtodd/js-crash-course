const names = [ 'M', 'I', 'K', 'E', 'K', 'I', 'Y' ];
const newNames = names.sort();
console.log(newNames);
console.log([...new Set(newNames)])

console.log([ ...new Set(names) ]);

console.log(names.sort());

const nums = [ 7, 1, 2, 3, 4, 5, 6, 6, 8, 9, 1, 5 ];
const nums2 = [ 7, 1, 2, 3, 4, 5, 6, 6, 8, 9, 1, 5, 30, 20 ];

const sortedNums = nums2.sort();

console.log(sortedNums);

console.log([ ...new Set(sortedNums) ]);

console.log(nums.sort());

nums.forEach((number) => {
	console.log(number);
});

// new Set(nums);
console.log([ ...new Set(nums.sort()) ]);
console.log([ ...new Set(nums) ]);

console.log(1 < 7);
console.log(1 > 5);

let a = function(...n) {
	return n;
};
console.log(a('hi'));

let x = function() {
	return {
		message : 'hi'
	};
};

console.log(x());

console.log(Math.max(1, 2, 3, 6, 3));

const arr = [ 8, 9, 1, 2, 15, 30, 5, 1, 50, 45, 7, 3, 1 ];

const newNum = arr.sort((a, b) => a - b);
console.log([ ...new Set(newNum) ]);
const numSet = [ ...new Set(newNum) ];
console.log(numSet);
// console.log(
// 	arr.sort((a, b) => {
// 		return a > b;
// 	})
// );

let newArr = arr.sort((a, b) => {
	return a > b;
});
console.log(newArr);

let lastSort = [ ...new Set(newArr) ];
const finSort = lastSort.sort((a, b) => {
	return a > b;
});
console.log(finSort);

let i = Number.MIN_VALUE;

console.log(i);
console.log(i + i);
console.log(i * i);
console.log(i / i);

let y = String([ [ 1, 2, 3 ], [ 4, 5, 6 ] ]);
console.log(y);

console.log(NaN === NaN);
