let sqlite3 = require('sqlite3').verbose();
const userMigration = require('./migration/usersMigration')
const usersSeed = require('./seed/usersSeed');

const db = new sqlite3.Database('./test.db', (err) => {
		db.run(`CREATE TABLE users (${userMigration})`,
				(err) => {
						if (err) {
								console.error(err.message);
								throw err;
						} else {
								usersSeed(db);
						}
				})
});

db.close();

module.exports = db;
// module.exports = app;
