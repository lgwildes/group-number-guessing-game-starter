const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

let guessData = [
  //new object to send back to client!
  
];


// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//random number function 
function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min)

}



// GET & POST Routes go here
app.get('/guesses', (req,res) => {
  console.log('Client wants the guess data! 🍦');

  res.send(guessData);
  
});

//When a player submits their guess...
app.post('/guesses', (req,res) => {
  console.log('Client made a guess! ❓', req.body);

guessData.push(req.body)
console.log('testing guessData', guessData)

  // function getThatNumber() {
  //   let result = randomNumberGenerator(1,25)
  //   return result
  // }
  
  // let randomToCheck = {randomNumber: getThatNumber()}
  // //create new variable for client data
  // let newGuesses = req.body
  
  // function compareNumbers(num) {
  //   for (let guess of newGuesses)
    
  //   if (guess === num) {
  //     console.log('a veritable match!')
  //   }
  //   else {
  //     console.log('womp womp')
  //   }
  // }

  // compareNumbers(randomToCheck.randomNumber);

  
 
 
 
  //send all guessData to client
  res.sendStatus(201);

  

});

// app.get('/randomNumber', (req,res) => {
//   console.log('in /randomNumber 📶')
  
  
  
//   res.send(randomToSend)
// })




app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
