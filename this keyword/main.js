//house

this.table = 'window table';
console.log(window.table);

this.garage = {
	table : 'garage table'
};

let johnsRoom = {
	table      : 'johns table',
	cleanTable() {
		console.log(`cleaning${this.table}`);
	}
};
