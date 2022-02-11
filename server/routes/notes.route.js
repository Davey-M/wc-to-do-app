const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {
    
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