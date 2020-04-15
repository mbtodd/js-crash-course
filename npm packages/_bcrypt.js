const bcrypt = require('bcryptjs');

async function hashPassword(plaintext) {
	const user = {
		name     : 'michael',
		email    : 'mtodd@muze3d.graphics',
		password : plaintext
	};

	const salt = await bcrypt.genSalt(10);

	user.password = await bcrypt.hash(plaintext, salt);

	console.log(user);
}

async function comparePasswords(plaintext, hash) {
	const isMatch = await bcrypt.compare(plaintext, hash);
	if (isMatch) {
		console.log('Match');
	} else {
		console.log('Not Match');
	}
}

// hashPassword('123456');
comparePasswords(
	'123456',
	'$2a$10$T9kkJDQXAroH8wi0Da2ju.NuEYq8pSpBp84cnEtd7AlDXggqKLlse'
);
