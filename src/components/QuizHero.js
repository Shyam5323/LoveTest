"use client";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function QuizHero({ data }) {
  const [quesIndex, setQuesIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const currentQuestion = data[quesIndex];

  const handleNext = () => {
    if (selectedOption === null) {
      toast.error("Please select an option", {
        position: "top-center",
      });
    } else {
      setQuesIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    }
  };

  const handleOptionChange = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const showResult = () => {};

  return (
    <main>
      <p className="font-light">{`Question ${quesIndex + 1}/15`}</p>
      <h2 className="font-bold text-lg">{currentQuestion.question}</h2>
      <form>
        {currentQuestion.options.map((option, optionIndex) => (
          <div key={optionIndex}>
            <label>
              <input
                type="radio"
                value={optionIndex}
                checked={selectedOption === optionIndex}
                onChange={() => handleOptionChange(optionIndex)}
              />
              {option.answer}
            </label>
          </div>
        ))}
      </form>
      {quesIndex < data.length - 1 && (
        <button
          className={
            selectedOption === null ? "btn btn-neutral" : "btn btn-primary"
          }
          onClick={handleNext}
        >
          Next
        </button>
      )}
      {quesIndex === data.length - 1 && (
        <Link href="/result">
          {" "}
          <button className="btn btn-secondary" onClick={showResult}>
            Check Results
          </button>{" "}
        </Link>
      )}
    </main>
  );
}
