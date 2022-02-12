const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {

    const queryString = 'SELECT * FROM "containers"';

    pool.query(queryString)
        .then(response => {
            res.send(response);
        })
        .catch(err => {
            console.error('Error fetching from containers database:', err);
            res.sendStatus(500);
        })
})

module.exports = router;