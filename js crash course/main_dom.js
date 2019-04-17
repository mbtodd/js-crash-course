// Single element selectors
// console.log(document.getElementById('my-form'));
// // use querySelector
// console.log(document.querySelector('h1'));

// // Multiple element selectors

// /* Use document.querySelectorAll() */
// console.log(document.querySelectorAll('.item'));
// // console.log(document.getElementByClassName('item'));

const stuff = document.querySelectorAll('.item');

stuff.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Hello';
ul.children[1].textContent = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
btn.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('#my-form').style.background = '#ccc';
	document.querySelector('body').classList.add('bg-dark');
	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</>';
});

// /* put DOM elements into variables */
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// // Add event listeners
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
// 	e.preventDefault();
// 	console.log(nameInput.value);
// }
