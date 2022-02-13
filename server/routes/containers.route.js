const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {

    const queryString = 'SELECT * FROM "containers" ORDER BY "id" ASC';

    pool.query(queryString)
        .then(response => {
            res.send(response);
        })
        .catch(err => {
            console.error('Error fetching from containers database:', err);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {

    const queryString = `
        INSERT INTO "containers" ("name")
        VALUES ($1)
    `

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

module.exports = router;