// Tests for the quiz engine. Because the logic is separate from the CLI,
// I can test it without any keyboard input.

const Quiz = require("../quiz");

const questions = [
  { question: "2 + 2?", answer: "4" },
  { question: "capital of France?", answer: "Paris" },
];

describe("Quiz", () => {
  let quiz;
  beforeEach(() => {
    quiz = new Quiz(questions);
  });

  test("starts at the first question with score 0", () => {
    expect(quiz.score).toBe(0);
    expect(quiz.currentQuestion.question).toBe("2 + 2?");
    expect(quiz.isFinished).toBe(false);
  });

  test("scores a correct answer and advances", () => {
    expect(quiz.answer("4")).toBe(true);
    expect(quiz.score).toBe(1);
    expect(quiz.currentQuestion.question).toBe("capital of France?");
  });

  test("answer check is case-insensitive and trims spaces", () => {
    quiz.answer("4");
    expect(quiz.answer("  paris ")).toBe(true);
    expect(quiz.score).toBe(2);
  });

  test("wrong answer does not score but still advances", () => {
    expect(quiz.answer("5")).toBe(false);
    expect(quiz.score).toBe(0);
    expect(quiz.current).toBe(1);
  });

  test("finishes and reports a result", () => {
    quiz.answer("4");
    quiz.answer("Paris");
    expect(quiz.isFinished).toBe(true);
    expect(quiz.result).toEqual({ score: 2, total: 2, percent: 100 });
  });

  test("throws if you answer after finishing", () => {
    quiz.answer("4");
    quiz.answer("Paris");
    expect(() => quiz.answer("x")).toThrow("already finished");
  });
});
