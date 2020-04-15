const jwt = require('jwt-simple');
const config = require('config');
const uuid = require('uuid');

function getToken() {
	const payload = { id: uuid.v4(), name: 'Michael' };

	const token = jwt.encode(payload, config.get('jwtSecret'));

	return { token };
}

function validateToken(token) {
	const decoded = jwt.decode(token, config.get('jwtSecret'));

	return decoded;
}

// console.log(getToken());
console.log(
	validateToken(
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVmOWY4YjViLWU3OWUtNGYyZC1hMzZmLWQ4MGFiOGNkMDI4MyIsIm5hbWUiOiJNaWNoYWVsIn0._y-P2o0G5-ryveTw7UWisGRwBZnJGn4bpVGKaYzdlow'
	)
);
