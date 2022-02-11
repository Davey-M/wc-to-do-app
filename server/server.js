const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

const notesRoute = require('./routes/notes.route');
app.use('/notes', notesRoute);

app.listen(port, () => console.log('App hosted on port:', port))