import React, { useState, useEffect } from "react";

// Import images (replace these imports with your actual image paths)
import slim_men from "../assets/Images/slim_men.png";
import veryslim_men from "../assets/Images/veryslim_men.png";
import normal_men from "../assets/Images/normal_men.png";
import fat_men from "../assets/Images/fat_men.png";
import { useQuiz } from "../context/QuizContext";
import { Link } from "react-router-dom";

const QuizPageThree = () => {
  const questionId = "three"; // Unique ID for the current question
  const options = [
    { id: 1, src: slim_men, label: "Slim" },
    { id: 2, src: veryslim_men, label: "Veryslim Men" },
    { id: 3, src: fat_men, label: "Fat Men" },
    { id: 4, src: normal_men, label: "Normal Men" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const { updateAnswer } = useQuiz(); // Access all answers from context

  // Load the stored answer for this question from localStorage
  useEffect(() => {
    const storedAnswers =
      JSON.parse(localStorage.getItem("quizAnswersThree")) || {};
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
      JSON.parse(localStorage.getItem("quizAnswersThree")) || {};
    storedAnswers[questionId] = id;
    localStorage.setItem("quizAnswersThree", JSON.stringify(storedAnswers));
  };

  // Retrieve data from localStorage
  const storedData = localStorage.getItem("quizAnswersThree");

  // Parse the JSON string into a JavaScript object
  const quizAnswers = storedData ? JSON.parse(storedData) : {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="shadow-md flex flex-col items-center justify-center bg-blue-50 p-6 rounded-lg">
        {/* Question */}
        <h2 className="text-lg font-bold text-gray-800 text-center mb-6">
          3.Which of these four people is the fattest?:-
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
        <div className="flex justify-between w-full max-w-md">
          {/* Previous Button */}
          <button disabled={questionId === "one"}>
            <Link
              to="/quiz-two"
              className="btn btn-primary px-6 py-2 rounded-md"
            >
              Previous
            </Link>
          </button>

          {/* Next Button */}
          <button>
            <Link
              to="/quiz-four"
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

export default QuizPageThree;
