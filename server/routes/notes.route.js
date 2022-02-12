const express = require('express');
const router = express.Router();

// pool module is hooked up to the database
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    
    // get all the data from the server
    const queryString = 'SELECT * FROM "notes" ORDER BY "text" ASC';

    pool.query(queryString)
        .then(response => {
            res.send(response);
        })
        .catch(err => {
            console.error(`Error querying ${queryString}:`, err);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {

    const queryString = `
        INSERT INTO "notes" ("text", "completed", "container")
        VALUES
            ($1, false, 0);
    `

    const queryOptions = [
        req.body.text,
    ]

    pool.query(queryString, queryOptions)
        .then(response => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.error('Error with post to notes:', err);
            res.sendStatus(500);
        })
})

module.exports = router;