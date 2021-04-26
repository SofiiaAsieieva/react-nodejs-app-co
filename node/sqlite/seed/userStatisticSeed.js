const usersData = require('./users_statistic.json');

function userStatisticSeed(db) {
		const users = Object.entries(usersData);
		
		for (const user of users) {
				let id;
				let date;
				let pageViews;
				let clicks;
				
				for (const key in user[1]) {
						const userValue = user[1][key];
						
						switch (key) {
								case 'user_id':
										id = userValue;
										break;
								case 'date':
										date = userValue;
										break;
								case 'page_views':
										pageViews = userValue;
										break;
								case 'clicks':
										clicks = userValue;
										break;
								
								default:
										break;
						}
				}
				
				let insert = 'INSERT INTO users_statistic (user_id, date, page_views, clicks) VALUES (?,?,?,?)'
				
				db.run(insert, [id, date, pageViews, clicks]);
		}
}

module.exports = userStatisticSeed;
