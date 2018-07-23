// The command-line front-end for the quiz engine.
//
// It uses Node's built-in "readline" to ask questions in the terminal.
// All the scoring logic lives in quiz.js; this file only deals with
// input/output. Keeping them separate is what makes quiz.js testable.
//
// Run with: node src/quiz/cli.js

const readline = require("readline");
const Quiz = require("./quiz");

const questions = [
  { question: "What keyword declares a constant?", answer: "const" },
  { question: "What does JSON stand for (first word)?", answer: "javascript" },
  { question: "Which method turns a string into an array?", answer: "split" },
];

function ask(rl, question) {
  // wrap readline's callback in a promise so I can use async/await
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const quiz = new Quiz(questions);
  console.log("=== JavaScript Quiz ===\n");

  while (!quiz.isFinished) {
    const given = await ask(rl, quiz.currentQuestion.question + " ");
    const correct = quiz.answer(given);
    console.log(correct ? "Correct!\n" : "Nope.\n");
  }

  const { score, total, percent } = quiz.result;
  console.log(`You scored ${score}/${total} (${percent}%)`);
  rl.close();
}

main();
