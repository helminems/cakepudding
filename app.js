console.log('cakepudding');
// WORDS in caps cause its never going to change
var words= ["cat", "dog", "unicorn", "koala", "kangaroo"];
var life = 8;
// word stores the word that the player guess
var guessedLetters = [];
// answerArray stores the answer board (starting with all _ and gradually filled in)
var answerArray = [];
// stores user guessed letters in guessedArray
var guessedArray = [];
// stores user input, output and lives
var guessLetter = document.getElementById('letter');
var lives = document.getElementById("life");
var letterInput = document.getElementById("letters-guessed").value;

guessLetter.value = '';
lives.innerHTML = 'You have ' + life + ' cakepuddings remaining';
// letterInput.innerHTML = 'Words chosen ' + letters-guessed;

/* make sure guess button is enabled */
guessButton = document.getElementById("guess");

// pick random word from WORDS answerArray
function chooseWord() {
  var randomWord = words[Math.floor(Math.random() * words.length)];
  var letters = randomWord.toUpperCase().split("");
  return letters;
};
var word = chooseWord();

// compare user letter to chosen random word
function guessedLetter(word, letterInput) {
  // return word;
  if (word.indexOf(letter) > -1) {
    guessedArray.push(letterInput);
    return word.indexOf(letter);
  } else {
    return 'Please choose another alphabet';
  }
};
var guess = (guessedLetter(word, letter));

// create underscore based on random word selected
function addUnderscores(word) {
  var guessedArray = [];
  for (var i = 0; i < word.length; i++){
    guessedArray[i] = '_';
  }
    // console.log(guessedArray);
    document.getElementById("words").innerHTML=guessedArray.join(" ");
};
var start = (addUnderscores(word));
