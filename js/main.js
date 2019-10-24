/*----- constants -----*/
const LOSE_WRONG_COUNT = 6;
const WORDS = [
  'DEVELOPER', 'HTML', 'JAVASCRIPT',
  'PROGRAM', 'CODE', 'FUNCTION',
  'RECURSION', 'REACT'
];

/*----- app's state (variables) -----*/
let secretWord, guessWord, lettersUsed, wrongLetters;

/*----- cached element references -----*/
const guessWordEl = document.getElementById('word');

/*----- event listeners -----*/


/*----- functions -----*/
init();

function render() {
  // display message

  // display gallows

  // display guessWord
  guessWordEl.textContent = guessWord;
  // update letters

}

function init() {
  let rndIdx = Math.floor(Math.random() * WORDS.length);
  secretWord = WORDS[rndIdx];
  guessWord = '_'.repeat(secretWord.length);
  lettersUsed = [];
  wrongLetters = [];
  render();
}