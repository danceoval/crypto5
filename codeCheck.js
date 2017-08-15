var correctAnswer = 'bluebeards bananas';

var guessInput = document.getElementById('guess');
var submitBtn = document.getElementById('submit');
var correctLetterOutput = document.getElementById('correct-letters');
var feedback = document.getElementById('feedback');

submitBtn.addEventListener('click', function () {
  var guess = guessInput.value.toLowerCase();
  var correctChars = '';

  for (var i = 0; i < correctAnswer.length; i++) {
    if (correctAnswer[i] === ' ') {
      correctChars += '\n';
    } else if (guess[i] === correctAnswer[i]) {
      correctChars += guess[i];
    } else {
      correctChars += '_';
    }
  }

  correctLetterOutput.innerText = 'Correct Letters: \n' + correctChars.split('').join(' ');

  feedback.innerText = guess === correctAnswer
    ? 'You got it! Next url: https://desolate-plains-48244.herokuapp.com'
    : 'Keep trying!';
});
