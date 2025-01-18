import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">
        Kids Quiz Questions and Answers Learning
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 text-center max-w-md mb-6">
        Welcome to the kids quiz! Test your knowledge, have fun, and learn with
        interesting questions designed just for you.
      </p>

      {/* Start Quiz Button */}
      <button className="btn bg-sky-500 text-white text-center px-6 py-3 text-lg font-semibold rounded-lg  hover:bg-sky-600">
        <Link to="/quiz">Start Quiz</Link>
      </button>
    </div>
  );
};

export default Home;
