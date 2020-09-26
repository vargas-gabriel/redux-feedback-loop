const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
	console.log("Getting feedback");
	const queryText = `SELECT * FROM "feedback"`;
	pool
		.query(queryText)
		.then((results) => {
			res.send(results.rows);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});
router.post("/", (req, res) => {
	console.log("Sending Feedback");
	const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
	 VALUES ($1, $2, $3, $4)`;
	pool
		.query(queryText)
		.then((results) => {
			res.send(results.rows);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});

module.exports = router;
