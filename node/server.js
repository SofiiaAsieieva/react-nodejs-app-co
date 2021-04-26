const express = require("express");
const sqlite3 = require("sqlite3");
let cors = require('cors')
let app = express();
const HTTP_PORT = 8000;

app.use(cors());
app.options('*', cors());

app.listen(HTTP_PORT, () => {
		console.log("Server is listening on port " + HTTP_PORT);
});

let db = new sqlite3.Database('./sqlite/test.db', sqlite3.OPEN_READWRITE, (err) => {
		if (err) {
				console.error(err.message);
		}
		console.log('Connected to the test database.');
});

app.get("/allUsers", (req, res, next) => {
		db.all("SELECT * FROM users", [], (err, rows) => {
				if (err) {
						res.status(400).json({"error": err.message});
						
						return;
				}
				res.status(200).json({rows});
		});
});

app.get("/users/:id", (req, res, next) => {
		db.get(`SELECT * FROM users where user_id = ?`, [req.params.id], (err, row) => {
				if (err) {
						res.status(400).json({"error":err.message});
						return;
				}
				res.status(200).json(row);
		});
});

app.get("/users", (req, res) => {
		const sql = `SELECT * FROM users ORDER BY user_id limit ${req.query.limit} offset ${(req.query.page - 1) * req.query.limit}`;
		const params = [];
		db.all(sql, params, (err, rows) => {
				if (err) {
						res.status(400).json({"error":err.message});
						
						return;
				}
				res.status(200).json({rows});
		});
});


app.get("/usersStatistics", (req, res) => {
		const sql = `SELECT * FROM users_statistic ORDER BY user_id ASC`;
		const params = [];
		db.all(sql, params, (err, rows) => {
				if (err) {
						res.status(400).json({"error":err.message});
						
						return;
				}
				res.status(200).json({rows});
		});
});

// e d limit
app.get("/usersStatisticsAndUsers", (req, res) => {
		const sql = `SELECT *, SUM(e.clicks) as all_clicks, SUM(e.page_views) as all_page_views
				FROM users_statistic e JOIN users d
				ON e.user_id = d.user_id
				GROUP BY e.user_id
				ORDER BY  cast(e.user_id as float) limit ${req.query.limit} offset ${(req.query.page - 1) * req.query.limit}; `;
		const params = [];
		db.all(sql, params, (err, rows) => {
				if (err) {
						res.status(400).json({"error":err.message});
						
						return;
				}
				res.status(200).json({rows});
		});
});
