const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
//const characters = require('../modules/characters');

// router.post('/', (req, res) => {
//  let newCharacter = req.body;
//  characters.push(newCharacter);
//  console.log('Added character', newCharacter);
//  console.log('We now have:', characters);
//  res.sendStatus(201);
// })

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

module.exports = router;
