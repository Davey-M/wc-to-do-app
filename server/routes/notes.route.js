const express = require('express');
const router = express.Router();

// pool module is hooked up to the database
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    
    // get all the data from the server
    const queryString = 'SELECT * FROM "notes" ORDER BY "id" ASC';

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

router.delete('/:id', (req, res) => {

    const id = req.params.id;

    const queryString = `DELETE FROM "notes" WHERE "id" = $1;`

    const queryOptions = [ id ];

    pool.query(queryString, queryOptions)
        .then(response => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.error('Error deleting note:', err);
            res.sendStatus(500);
        })
})

router.put('/:id', (req, res) => {
    let id = req.params.id;

    let containerId = req.body.id;

    const queryString = `
        UPDATE "notes" SET "container" = $2 WHERE "id" = $1;
    `

    const queryOptions = [
        id,
        containerId,
    ]

    pool.query(queryString, queryOptions)
        .then(response => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.error('Error updating note:', err);
            res.sendStatus(500);
        })
})

module.exports = router;