console.log(
  "________________________________________________________________________________Welcome To The Game________________________________________________________________________________"
);
console.log(
  "** Random number is generated, Guess the number between 0 to 100."
);
let randomNum = Number.parseInt(Math.random() * 100);
let guessedNum;
let score = 0;
do {
  score += 1;
  guessedNum = Number.parseInt(prompt());
  if (guessedNum == randomNum) {
    console.clear();
    console.log(`You've guessed it RIGHT & the number was ${randomNum}.`);
  } else {
    console.clear();
    console.log(
      "You've guessed it WRONG & your guessed number is",
      guessedNum < randomNum ? "LESSER" : "GREATER",
      "than original number, GUESS AGAIN."
    );
  }
} while (guessedNum != randomNum);
score = 100 - score;
console.log(`Your score is ${score}.`);
