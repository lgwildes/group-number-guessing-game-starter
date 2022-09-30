
$(document).ready(handleReady);

let guessData = [];

function handleReady() {
  console.log("jquery is loaded! 💪")

  $('#guessForm').on('submit', addGuessData);

  loadData();
  render();
}

let totalGuessCount = 0

function addGuessData(evt) {
  evt.preventDefault();
    console.log('in addGuessData 🤓');

   

    let guessForm = {
      oneGuessInput: $('#oneGuessInput').val(),
      twoGuessInput: $('#twoGuessInput').val()
    };

    console.log(guessForm);

    $.ajax({
      url: '/guesses',
      method: 'POST',
      data: guessForm
    })
      .then((response) => {
        console.log('POST /guesses response', response);

        loadData();
       
      })
      .catch((err) => {
        console.log('POST error', err);
      });

      // render()

}

function loadData() {
  
  console.log('in loadData')

    $.ajax({
      url:'/guesses',
      method: 'GET'
      
    })
      .then((response) => {
        console.log('in /GET', response);
        guessData = response;
        render(); 
      })
      .catch((err) => {
        console.log('Oops there was an error!', err);
      })
}




// function render() {
//   console.log('In render guesses');
//   totalGuessCount += 2;
//   $('#guessCounter').empty();
//   $('#guessCounter').append(`
//   Total Guess Count: ${totalGuessCount}
//   `);

//   console.log('total guess count', totalGuessCount);

// }

function render() {
  console.log('Render is working!');
  totalGuessCount = guessData.length
  $('#guessCounter').empty();
  $('#guessCounter').append(`
  Total Guess Count: ${totalGuessCount}
  `);

  $('#tableBody').empty();
  for (let guess of guessData) {
    $('#tableBody').append(`
  <tr>
    <td>Player One</td>
    <td>${guess.oneGuessInput}</td>
    <td>${guess.p1Result}</td>
  </tr>
  <tr>
    <td>Player Two</td>
    <td>${guess.twoGuessInput}</td>
    <td>${guess.p2Result}</td>
  </tr>

  `)

  }
    
}