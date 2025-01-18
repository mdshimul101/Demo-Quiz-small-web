import React, { useState, useEffect } from "react";

// Import images (replace these imports with your actual image paths)
import tomato from "../assets/Images/tomato.png";
import cabbage from "../assets/Images/cabbage.png";
import eggplant from "../assets/Images/eggplant.png";
import carrot from "../assets/Images/carrot.png";
import { useQuiz } from "../context/QuizContext";
import { Link } from "react-router-dom";

const QuizPageFour = () => {
  const questionId = "four"; // Unique ID for the current question
  const options = [
    { id: 1, src: tomato, label: "Tomato" },
    { id: 2, src: cabbage, label: "Cabbage" },
    { id: 3, src: eggplant, label: "Eggplant" },
    { id: 4, src: carrot, label: "Carrot" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const { answers, updateAnswer } = useQuiz(); // Access all answers from context

  // Load the stored answer for this question from localStorage
  useEffect(() => {
    const storedAnswers =
      JSON.parse(localStorage.getItem("quizAnswersFour")) || {};
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
      JSON.parse(localStorage.getItem("quizAnswersFour")) || {};
    storedAnswers[questionId] = id;
    localStorage.setItem("quizAnswersFour", JSON.stringify(storedAnswers));
  };

  // Retrieve data from localStorage
  const storedData = localStorage.getItem("quizAnswersFour");

  // Parse the JSON string into a JavaScript object
  const quizAnswers = storedData ? JSON.parse(storedData) : {};

  // Now you can access the stored answers
  //   console.log(quizAnswers, answers);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="shadow-md flex flex-col items-center justify-center bg-blue-50 p-6 rounded-lg">
        {/* Question */}
        <h2 className="text-lg font-bold text-gray-800 text-center mb-6">
          4.Which of these is a picture of a tomato?:-
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
              to="/quiz-three"
              className="btn btn-primary px-6 py-2 rounded-md"
            >
              Previous
            </Link>
          </button>

          {/* Next Button */}
          <button>
            <Link
              to="/quiz-five"
              className="btn btn-primary px-6 py-2 rounded-md"
            >
              Next →
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPageFour;
