import React, { useState, useEffect } from "react";

// Import images (replace these imports with your actual image paths)
import apple from "../assets/Images/apple.png";
import banana from "../assets/Images/banana.png";
import grapes from "../assets/Images/grapes.png";
import pineapple from "../assets/Images/pineapple.png";
import { useQuiz } from "../context/QuizContext";
import { Link } from "react-router-dom";

const QuizPageFive = () => {
  const questionId = "five"; // Unique ID for the current question
  const options = [
    { id: 1, src: apple, label: "Apple" },
    { id: 2, src: banana, label: "Banana" },
    { id: 3, src: grapes, label: "Grapes" },
    { id: 4, src: pineapple, label: "Pineapple" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const { answers, updateAnswer } = useQuiz(); // Access all answers from context

  // Load the stored answer for this question from localStorage
  useEffect(() => {
    const storedAnswers =
      JSON.parse(localStorage.getItem("quizAnswersFive")) || {};
    if (storedAnswers[questionId]) {
      setSelectedOption(storedAnswers[questionId]);
    }
  }, [questionId]);

  // Handle selection
  const handleCheckboxChange = (id) => {
    setSelectedOption(id);
    updateAnswer(questionId, id); // Store the answer in context

    // Update localStorage with the selected answer
    const storedAnswers =
      JSON.parse(localStorage.getItem("quizAnswersFive")) || {};
    storedAnswers[questionId] = id;
    localStorage.setItem("quizAnswersFive", JSON.stringify(storedAnswers));
  };

  // Retrieve data from localStorage
  const storedData = localStorage.getItem("quizAnswersFive");

  // Parse the JSON string into a JavaScript object
  const quizAnswers = storedData ? JSON.parse(storedData) : {};

  // Now you can access the stored answers
  console.log(quizAnswers, answers);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="shadow-md flex flex-col items-center justify-center bg-blue-50 p-6 rounded-lg">
        {/* Question */}
        <h2 className="text-lg font-bold text-gray-800 text-center mb-6">
          5.Which of these fruits is pineapple?:-
        </h2>

        {/* Options */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {options.map((option) => (
            <div
              key={option.id}
              className={`flex items-center justify-between p-4 bg-white border-2 rounded-lg shadow-md ${
                selectedOption === option.id
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              {/* Image */}
              <img src={option.src} alt={option.label} className="w-16 h-16" />

              {/* Checkbox */}
              <input
                type="checkbox"
                className="form-checkbox mx-2 h-6 w-6 text-blue-500"
                checked={
                  selectedOption === option.id || quizAnswers.one == option.id
                }
                onChange={() => handleCheckboxChange(option.id)}
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 w-full max-w-md">
          {/* Previous Button */}
          <button disabled={questionId === "one"}>
            <Link
              to="/quiz-four"
              className="btn btn-primary px-6 py-2 rounded-md"
            >
              Previous
            </Link>
          </button>

          {/* Next Button */}
          <button>
            <Link
              to="/quiz-result"
              className="btn btn-primary px-6 py-2 rounded-md"
            >
              See Result
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPageFive;
