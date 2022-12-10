const apiNotes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
apiNotes.get('/notes', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
apiNotes.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);

  if (req.body) {
    const { title, text } = req.body;

    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(newNote);
  } else {
    res.error('Error in adding note');
  }
});

apiNotes.delete('/notes/:id', (req, res) => {
  console.info(`${req.method} request received for note`);
  
  if (req.body) {
    const requestedID = req.params.id.toLowerCase();
  readAndDelete(requestedID, './db/db.json')
  res.json('Note Deleted')
  } else {
    res.error('Error Deleting Note')
  }
  
})

module.exports = apiNotes;