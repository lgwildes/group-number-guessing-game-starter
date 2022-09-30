const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const PORT = 5000;

let guessData;

let randomNumber = 0;

console.log('test random number function', randomNumberGenerator())

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//random number function 
function randomNumberGenerator() {
  randomNumber = Math.floor(Math.random() * (1 + 25- 1) + 1)
  return randomNumber
}

// GET & POST Routes go here


//When a player submits their guess...
app.post('/guesses', (req,res) => {
  console.log('Client made a guess! ❓', req.body);

  // req.body.p1Result = "poop"
  // req.body.p2Result = "poop2"

  // guessData.push(req.body);
  guessData = req.body;
  console.log('testing guessData', guessData);
  compareNumbers(guessData);
  // compareNumbers(guessData);
 
  //send all guessData to client
  res.sendStatus(201);

  // compareNumbers();


  

});

function compareNumbers() {
  console.log('in compareNumbers');
  let newGuessArray = Object.values(guessData)

  results = [];

  for (let guess of newGuessArray) {
      //EQUALS
  if (Number(guess) === randomNumber ) {
    results.push("You Win!")
  }
  // GREATER THAN
  if  (Number(guess) > randomNumber ) {
    respresultsonse.push("Too High!")
  }
  // LESS THAN
  if  (Number(guess) < randomNumber ) {
    results.push("Too Low!");
  }
  }
  console.log(results);
}

// function compareNumbers() {
//   console.log('in compareNumbers');

//   //EQUALS
//   if (req.body.oneGuessInput === randomNumber ) {
//     req.body.p1Result = "You Win!"
//   }

//   if (req.body.twoGuessInput === randomNumber ) {
//     req.body.p2Result = "You Win!"
//   }
//   // GREATER THAN
//   if  (req.body.oneGuessInput > randomNumber ) {
//     req.body.p1Result = "Too High!"
//   }

//   if  (req.body.twoGuessInput > randomNumber ) {
//     req.body.p2Result = "Too High!"
//   }
//   // LESS THAN
//   if  (req.body.oneGuessInput < randomNumber ) {
//     req.body.p1Result = "Too High!"
//   }

//   if  (req.body.twoGuessInput < randomNumber ) {
//     req.body.p2Result = "Too High!"
//   }



  
// }

app.get('/guesses', (req,res) => {
  console.log('Client wants guess results!',)

  res.send(guessData);
})












// function compareNumbers() {
//   // let compareArray = Object.values(guessData);

//   // console.log('testing compareArray', compareArray);

//   results = [];

//   // if (req.body.oneGuessInput === randomNumber){
//   //       results.push('You Win Player One!');
    
  //   if (req.body.twoGuessInput === randomNumber) {
  //     results.push('You Win Player Two!');
  //   }
  //   else {
  //     results.push('womp womp')
  //   }
  // } 



  // for (let guess of compareArray) {
  //   if (Number(guess) === randomNumber){
  //     results.push('You Win!');
  //     console.log('testing for a guess', guess)
  //   }
  //   else if (Number(guess) > randomNumber) {
  //     results.push('Too High!');
  //   }
  //   else if (Number(guess) < randomNumber) {
  //     results.push('Too Low!')
  //   }
  // }

  // console.log('show results', results)
  
// }


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
