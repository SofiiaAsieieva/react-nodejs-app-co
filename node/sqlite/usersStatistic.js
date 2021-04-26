let sqlite3 = require('sqlite3').verbose();
const userStatisticSeed = require('./seed/userStatisticSeed');
const userStatistic = require('./migration/usersStatisticMigration');

let db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
		if (err) {
				console.error(err.message)
				throw err
		} else {
				db.run(`CREATE TABLE users_statistic (${userStatistic})`,
						(err) => {
								if (err) {
										console.error(err.message);
										throw err;
								} else {
										userStatisticSeed(db);
								}
						});
		}
});


db.close();
