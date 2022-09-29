$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded! 💪")

  $('#guessForm').on('submit', addGuessData);

  
}

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

        render();
      })
      .catch((err) => {
        console.log('POST error', err);
      });

}