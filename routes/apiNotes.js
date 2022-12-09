const apiNotes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
apiNotes.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
apiNotes.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add a tip`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully!!`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = apiNotes;