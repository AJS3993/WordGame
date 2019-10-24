/*----- constants -----*/
const LOSE_WRONG_COUNT = 6;
const WORDS = [
  'DEVELOPER', 'HTML', 'JAVASCRIPT',
  'PROGRAM', 'CODE', 'FUNCTION',
  'RECURSION', 'REACT'
];

/*----- app's state (variables) -----*/
let secretWord, guessWord, usedLetters, wrongLetters;

/*----- cached element references -----*/
const guessWordEl = document.getElementById('word');
const messageEl = document.querySelector('h2');
const letterBtns = document.querySelectorAll('#letters button');

/*----- event listeners -----*/
document.getElementById('letters')
  .addEventListener('click', handleLetterClick);

/*----- functions -----*/
init();

function handleLetterClick(evt) {
  let letter = evt.target.textContent;
  if (
    evt.target.tagName !== 'BUTTON' ||
    usedLetters.includes(letter) ||
    secretWord === guessWord ||
    wrongLetters.length === LOSE_WRONG_COUNT
  ) return;
  usedLetters.push(letter);
  if (secretWord.includes(letter)) {
    // correct guess
    let newGuessWord = '';
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord.charAt(i) === letter) {
        newGuessWord += letter;
      } else {
        newGuessWord += guessWord.charAt(i);
      }
    }
    guessWord = newGuessWord;
  } else {
    wrongLetters.push(letter);
  }
  render();
}

function render() {
  // display message
  if (secretWord === guessWord) {
    messageEl.textContent = 'Congrats! You guessed the word!';
  } else if (wrongLetters.length === LOSE_WRONG_COUNT) {
    messageEl.textContent = "Sorry, you've been hung!";
  } else {
    messageEl.textContent = "Good Luck!";
  }

  // display gallows

  // display guessWord
  guessWordEl.textContent = guessWord;
  // update letters
  letterBtns.forEach(function(btn) {
    let letter = btn.textContent;
    if (wrongLetters.includes(letter)) {
      btn.className = 'wrong';
    } else if (usedLetters.includes(letter)) {
      btn.className = 'correct';
    } else {
      btn.className = '';
    }
  });
}

function init() {
  let rndIdx = Math.floor(Math.random() * WORDS.length);
  secretWord = WORDS[rndIdx];
  guessWord = '_'.repeat(secretWord.length);
  usedLetters = [];
  wrongLetters = [];
  render();
}