// A quiz "engine" - pure logic, no input/output, so it is easy to test.
// The CLI part (reading from the keyboard) lives in a separate file.

class Quiz {
  constructor(questions) {
    this.questions = questions; // [{ question, answer }]
    this.current = 0;
    this.score = 0;
  }

  get isFinished() {
    return this.current >= this.questions.length;
  }

  get currentQuestion() {
    return this.questions[this.current];
  }

  // submit an answer, update the score, and move to the next question
  answer(given) {
    if (this.isFinished) {
      throw new Error("quiz is already finished");
    }
    const correct = this.currentQuestion.answer;
    const isCorrect =
      String(given).trim().toLowerCase() === String(correct).toLowerCase();
    if (isCorrect) this.score += 1;
    this.current += 1;
    return isCorrect;
  }

  get result() {
    return {
      score: this.score,
      total: this.questions.length,
      percent: Math.round((this.score / this.questions.length) * 100),
    };
  }
}

module.exports = Quiz;
