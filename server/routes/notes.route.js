const express = require('express');
const router = express.Router();

// pool module is hooked up to the database
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    
    // get all the data from the server
    const queryString = 'SELECT * FROM "notes"';

    pool.query(queryString)
        .then(response => {
            res.send(response);
        })
        .catch(err => {
            console.error(`Error querying ${queryString}:`, err);
            res.sendStatus(500);
        })
})

module.exports = router;