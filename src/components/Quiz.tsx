import React, { useState } from 'react';

const Quiz = ({ videoData }) => {
  // In a real application, you would fetch quiz questions from an AI service
  const [questions] = useState([
    {
      id: 1,
      question: 'What is the main topic of the video?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'Option A',
    },
    {
      id: 2,
      question: 'Which concept was explained in detail?',
      options: ['Concept X', 'Concept Y', 'Concept Z', 'Concept W'],
      correctAnswer: 'Concept Y',
    },
  ]);

  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId, answer) => {
    setUserAnswers({ ...userAnswers, [questionId]: answer });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Quiz</h2>
      {videoData ? (
        <div>
          {questions.map((q) => (
            <div key={q.id} className="mb-6">
              <p className="font-semibold mb-2">{q.question}</p>
              <div className="space-y-2">
                {q.options.map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={option}
                      onChange={() => handleAnswer(q.id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
              {showResults && (
                <p className={`mt-2 ${userAnswers[q.id] === q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                  {userAnswers[q.id] === q.correctAnswer ? 'Correct!' : `Incorrect. The correct answer is ${q.correctAnswer}.`}
                </p>
              )}
            </div>
          ))}
          {!showResults && (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit Answers
            </button>
          )}
        </div>
      ) : (
        <p>Please upload a video to generate a quiz.</p>
      )}
    </div>
  );
};

export default Quiz;