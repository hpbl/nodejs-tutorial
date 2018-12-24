const readline = require('readline');

const game = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2

const checkAnswer = (userInput) => {
  if (userInput.trim() == answer) {
    game.close();
  } else {
    game.setPrompt('Wrong answer, try again: ');
    game.prompt();
  }
}

game.question(`What is ${num1} + ${num2}? `, checkAnswer);
game.on('line', checkAnswer);

game.on('close', () => {
  console.log('Right answer!');
})
