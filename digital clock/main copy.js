function activeClock() {
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();

	let time = 'The new Clock goes here bootch';
	document.querySelector('#myClockDisplay').innerText = time;
	document.querySelector('#myClockDisplay').innerContent = time;
}

activeClock();
