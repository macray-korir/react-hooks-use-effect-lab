import React, { useState, useEffect } from "react";

const Question = ({ question, onAnswered }) => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timer); // Cleanup function to clear the timeout on unmount
    };
  }, [timeRemaining]); // Add timeRemaining as a dependency to trigger useEffect on every update

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10); // Reset timeRemaining when it hits 0
      onAnswered(false); // Call onAnswered with false after 10 seconds
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
};

export default Question;
