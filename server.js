const express = require('express');
const path = require('path');
const notes = require('./routes/apiNotes.js')

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/", notes);

app.use(express.static('public'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () => {
    console.log(`Note Taker listening at http://localhost:${PORT}/`);
  });