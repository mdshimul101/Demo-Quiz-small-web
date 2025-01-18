import React from "react";
import { useQuiz } from "../context/QuizContext";
import { Link } from "react-router-dom";
// import congratsImage1 from "../assets/Images/congrats.png"; // Replace with your actual congratulation image path

const ResultPage = () => {
  const { answers } = useQuiz(); // Access all answers from context

  const congratsImage =
    "https://img.freepik.com/premium-vector/congratulations-clipart-cartoon-vector_705090-4321.jpg?semt=ais_hybrid";

  const correctAnswer = { one: 2, two: 2, three: 3, four: 1, five: 4 };

  const calculateScore = (answers, correctAnswer) => {
    let score = 0;

    // Iterate through the keys in answers
    for (let key in answers) {
      // Check if the value matches in both objects
      if (answers[key] === correctAnswer[key]) {
        score++; // Increment score for a correct match
      }
    }

    return score;
  };

  const totalScore = calculateScore(answers, correctAnswer);
  localStorage.clear();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="md:w-1/2 shadow-md flex flex-col items-center justify-center bg-blue-50 p-6">
        {totalScore === 5 ? (
          // Congratulation message for full score
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              🎉 Congratulations! 🎉
            </h2>
            <p className="text-lg font-medium text-gray-700 mb-4">
              You scored a perfect {totalScore}/5!
            </p>
            <img
              src={congratsImage}
              alt="Congratulations"
              className="w-48 h-48 mx-auto mb-6"
            />
            <div className="flex gap-2 justify-center items-center">
              {/* Re-Start Button */}
              <Link
                to="/quiz"
                className="btn bg-sky-400 hover:bg-sky-500 text-white mt-4 w-32 px-6 py-2 rounded-md font-semibold"
              >
                Re-Start
              </Link>
              {/* Go To Home Button */}
              <Link
                to="/"
                className="btn bg-sky-400 hover:bg-sky-500 text-white mt-4 w-32 px-6 py-2 rounded-md font-semibold"
              >
                Go To Home
              </Link>
            </div>
          </div>
        ) : (
          // Regular result content for less than full score
          <>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Quiz Results: {totalScore}/5
            </h2>
            <div className="mt-3">
              <h3 className="text-green-600 font-semibold text-xl mb-5">
                Total Correct Answer : {totalScore}
              </h3>
              <h3 className="text-red-600 font-semibold text-xl mb-5">
                Total Wrong Answer : {5 - totalScore}
              </h3>
              <div className="flex justify-center">
                {/* Try Again Button */}
                <Link
                  to="/quiz"
                  className="btn bg-sky-400 hover:bg-sky-500 text-white mt-4 w-32 px-6 py-2 rounded-md font-semibold "
                >
                  Try Again
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
