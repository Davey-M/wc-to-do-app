const express = require('express');
const app = express();

// host app on port specified by the hosing service or localhost
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

// notes route handles sending and receiving notes from the database
const notesRoute = require('./routes/notes.route');
app.use('/notes', notesRoute);

const containersRoute = require('./routes/containers.route');
app.use('/containers', containersRoute);

app.listen(port, () => console.log('App hosted on port:', port))