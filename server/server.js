const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

let guessData = [];

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.get('/guesses', (req,res) => {
  console.log('Client wants the guess data! ❓');

  res.send(guessData);
});

//When a player submits their guess...
app.post('/guesses', (req,res) => {
  console.log('Client made a guess! ❓', req.body);

  //create new variable for client data
  let newGuesses = req.body
  //add that new variable to the guessData array 
  guessData.push(newGuesses);
  //send all guessData to client
  res.sendStatus(201);

});








app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
