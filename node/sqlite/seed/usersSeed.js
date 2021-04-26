const usersData = require('./users.json');

function usersSeed(db) {
		const users = Object.entries(usersData);
		
		for (const user of users) {
				let id;
				let firstName;
				let lastName;
				let email;
				let gender;
				let ip;
				
				for (const key in user[1]) {
						const userValue = user[1][key];
						
						switch (key) {
								case 'id':
										id = userValue;
										break;
								case 'first_name':
										firstName = userValue;
										break;
								case 'last_name':
										lastName = userValue;
										break;
								case 'email':
										email = userValue;
										break;
								case 'gender':
										gender = userValue;
										break;
								case 'ip_address':
										ip = userValue;
										break;
								
								default:
										break;
						}
				}
				
				let insert = 'INSERT INTO users (user_id, first_name, last_name, email, gender, ip_address) VALUES (?,?,?,?,?,?)'
				
				
				db.run(insert, [id, firstName, lastName, email, gender, ip]);
		}
}

module.exports = usersSeed;
