const express = require('express');
const router = express.Router();

// database connection
const pool = require('../modules/pool');

router.get('/', (req, res) => {

    // order containers by when they were added to the database
    const queryString = 'SELECT * FROM "containers" ORDER BY "id" ASC;';

    pool.query(queryString)
        .then(response => {
            res.send(response);
        })
        .catch(err => {
            // handle errors
            console.error('Error fetching from containers database:', err);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {

    // adding new containers only needs to add their name
    const queryString = `
        INSERT INTO "containers" ("name")
        VALUES ($1);
    `

    // prevent sql injection
    const queryOptions = [ req.body.name ];

    pool.query(queryString, queryOptions)
        .then(response => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.error('Error sending data to containers table:', err);
            res.sendStatus(500);
        })
})

router.delete('/:id', (req, res) => {

    // get id from client
    const id = req.params.id;

    // delete full container from database
    const queryString = `DELETE FROM "containers" WHERE "id" = $1;`

    // prevent sql injection
    const queryOptions = [ id ];

    pool.query(queryString, queryOptions)
        .then(response => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.error('Error deleting container:', err);
            res.sendStatus(500);
        })
})

// pack router as module
module.exports = router;