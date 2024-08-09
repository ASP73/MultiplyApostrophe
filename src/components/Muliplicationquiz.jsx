import React, { useState, useEffect } from "react";
import axios from "axios";

const MultiplicationQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    axios
      .get("/api/multiplication")
      .then((response) => {
        setQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error("Error fetching multiplication questions:", error);
      });
  }, []);

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { num1, num2 } = questions[currentQuestion];
    const correctAnswer = num1 * num2;

    if (parseInt(userAnswer) === correctAnswer) {
      setCorrectCount(correctCount + 1);
    }

    setUserAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h2>Multiplication Quiz</h2>
      {currentQuestion < questions.length ? (
        <div>
          <p>Question {currentQuestion + 1}</p>
          <p>
            {questions[currentQuestion].num1} x{" "}
            {questions[currentQuestion].num2}
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userAnswer}
              onChange={handleAnswerChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <p>Quiz completed! Correct answers: {correctCount} out of 25</p>
      )}
    </div>
  );
};

export default MultiplicationQuiz;
