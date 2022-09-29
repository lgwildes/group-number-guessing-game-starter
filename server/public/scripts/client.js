
$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded! 💪")

  $('#guessForm').on('submit', addGuessData);

  randomNumberGenerator();
}

let totalGuessCount = 0

function addGuessData(evt) {
  evt.preventDefault();
    console.log('in addGuessData 🤓');

    // let playerOne = {
    //   name: $('#lydiaInput').val()
    // }
    // //console.log('testing playerOne expect Lydia ', playerOne)

    // let playerOneGuess = {
    //   guess: $('#lydiaGuessInput').val()
    // }
    // //console.log('testing playerOneGuess expect 2 ', playerOneGuess)

    // let playerTwo = {
    //   name: $('#juanInput').val()
    // }
    // //console.log('testing playerTwo expect Juan ', playerTwo)

    // let playerTwoGuess = {
    //   guess: $('#juanGuessInput').val()
    // }
    // //console.log('testing playerTwoGuess expect 3 ', playerTwoGuess)

    let guessForm = {
      lydiaInput: $('#lydiaInput').val(),
      lydiaGuessInput: $('#lydiaGuessInput').val(),
      juanInput: $('#juanInput').val(),
      juanGuessInput: $('#juanGuessInput').val()
    };

    console.log(guessForm);

    $.ajax({
      url: '/guesses',
      method: 'POST',
      data: guessForm
    })
      .then((response) => {
        console.log('POST /guesses response', response);

        //loadGuesses();

        $('#tableBody').append(`
        <tr>
          <td>${guessForm.lydiaInput}</td>
          <td>${guessForm.lydiaGuessInput}</td>
          <td>details here TODO</td>
        </tr>
        <tr>
          <td>${guessForm.juanInput}</td>
          <td>${guessForm.juanGuessInput}</td>
          <td>details here TODO</td>
        </tr>
        
        `)

       
      })
      .catch((err) => {
        console.log('POST error', err);
      });

      render()

}

function loadGuesses() {
  console.log('load guess!');

  $.ajax({
    url: '/guesses',
    method: 'GET'
  })
    .then((response) => {
      console.log('GET guesses', response);

      render();
    })
      .catch((err) => {
        console.log('GET /guesses error', err);
        alert('Sorry, something went wrong!');
      });
}

function randomNumberGenerator() {
  console.log('in randomNumberGenerator')

  $.ajax({
    url: '/randomNumber',
    method: 'GET'
  })
  .then((response) => {
    console.log('GET /randomNumber', response)
  })
  .catch((err) => {
    console.log('GET /randomNumber error', err);
    alert('Sorry, something went wrong!')
  });
}

function render() {
  console.log('In render guesses');
  totalGuessCount += 2;
  $('#guessCounter').empty();
  $('#guessCounter').append(`
  Total Guess Count: ${totalGuessCount}
  `);

  console.log('total guess count', totalGuessCount);

}

