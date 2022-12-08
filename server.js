const express = require('express');
const path = require('path');
const db = require('./db/db.json');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => {
//need to create and import handler - returned saved notes as JSON
})

app.post('/api/notes', (req, res) => {
// need to create and import handler - receive note to save on the request body - update db, return note to client. 
})

app.listen(PORT, () => {
    console.log(`Note Taker listening at http://localhost:${PORT}/`);
  });