'use strict';

const number = document.querySelector('.number');
const checkit = document.querySelector('.check');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');

let random;
let scoreCount;
let times = 2;
let highscore = 0;

function generateRandom() {
  random = Math.trunc(Math.random() * 20) + 1;
}

function generate() {
  generateRandom();
  number.textContent = '?';
  scoreCount = 20;
  score.textContent = scoreCount;
  message.textContent = 'Start guessing...';
  guess.value = '';
}

generate();

again.addEventListener('click', function () {
  times = 2;
  generate();
});

function checkLoseCondition() {
  if (scoreCount <= 0) {
    message.textContent = '💥 You lose buddy!';
    return true;
  }
  return false;
}

checkit.addEventListener('click', function () {
  const guessValue = Number(guess.value);

  if (!guessValue) {
    message.textContent = '⛔ No number entered!';
    return;
  }

  if (guessValue === random) {
    message.textContent = '🎉 Correct guess buddy!';
    number.textContent = random;
    scoreCount++;
    score.textContent = scoreCount;

    times--;
    if (times > 0) {
      alert(`${times} remaining attempts to play`);
      generateRandom();
      number.textContent = '?';
    } else {
      alert(`Game ended`);
    }

    if (scoreCount > highscore) {
      highscore = scoreCount;
      highScore.textContent = highscore;
    }
  } else if (guessValue < random) {
    message.textContent = '📉 Try a higher number!';
    scoreCount--;
    if (!checkLoseCondition()) {
      score.textContent = scoreCount;
    }
  } else {
    message.textContent = '📈 Try a lower number!';
    scoreCount--;
    if (!checkLoseCondition()) {
      score.textContent = scoreCount;
    }
  }
});
