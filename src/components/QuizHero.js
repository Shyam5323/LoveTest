"use client";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function QuizHero({ data }) {
  const [quesIndex, setQuesIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const currentQuestion = data[quesIndex];
  const [isLoading, setIsLoading] = useState(false);

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

  const showResult = () => {
    setIsLoading(true);
    // Simulate loading for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to the result page after 3 seconds
      window.location.href = "/result";
    }, 3000);
  };
  return (
    <main>
      <p className="font-light">{`Question ${quesIndex + 1}/15`}</p>
      <h2 className="font-bold text-lg">{currentQuestion.question}</h2>
      <form>
        {currentQuestion.options.map((option, optionIndex) => (
          <div className="block border m-2 p-2" key={optionIndex}>
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
      <div className="flex justify-center">
        {quesIndex === 1 || quesIndex === 2 ? (
          <div className="flex flex-col">
            <p className="text-xl font-light text-center"> It's inside this box</p>
            <img src="/present.webp" alt="Present" />
          </div>
        ) : quesIndex === 3 ? (
          <div className="flex flex-col">
            <p  className="text-xl font-light text-center"> Let's open the gift</p>
            <img src="/present2.webp" alt="Present" />
          </div>
        ) : quesIndex === 0 ? (
          <p className="text-5xl text-center font-light mt-10">
            We've got a gift for you..
          </p>
        ) : quesIndex === 4 ? (
          <div className="flex flex-col">
            <p  className="text-xl font-light text-center"> Something's happening , It's almost out</p>
            <img src="/present3.avif" alt="Present" />
          </div>
        ) : quesIndex === 5 ? (
          <div className="flex flex-col">
            <p  className="text-xl font-light text-center"> Drumrolls please</p>
            <img src="/present4.jpg" alt="Present" />
          </div>
        ) : quesIndex === 6 ? (
          <div className="flex flex-col">
            <p  className="text-xl font-light text-center">
              
              Ta-da <br></br> It's Gwen
            </p>
            <img src="/gwen1.jpg" alt="Present" />
          </div>
        ) : quesIndex === 7 ? (
          <div className="flex flex-col">
            <p  className="text-xl font-light text-center"> In case that wasnt HD enough for you</p>
            <img src="/gwen2.jpeg" alt="Present" />
          </div>
        ) : quesIndex === 8 ? (
          <div className="flex flex-col">
            <p  className="text-xl font-light text-center"> Well, it's getting a bit steamy in here</p>
            <img src="/gwen3.jpg" alt="Present" />
          </div>
        ) : quesIndex === 9 ? (
          <div className="flex-col">
            <p  className="text-xl font-light text-center"> For all the rajasthanis there</p>
            <img src="/gwen4.png" alt="Present" />
          </div>
        ) : quesIndex === 10 ? (
          <div className="flex flex-col">
            <p  className="text-xl font-light text-center">It's kind of getting out of hand now</p>
            <img src="/gwen5.jpg" alt="Present" />
          </div>
        ) : quesIndex === 11 ? (
          <div className="flex flex-col">
            <p  className="text-xl font-light text-center">
              {" "}
              uh-uh<br></br> That's it
            </p>
            <img src="/gwen6.png" alt="Present" />
          </div>
        ) : quesIndex === 12 ? (
          <img src="/nohorny1.jpeg" alt="Some other image" />
        ) : quesIndex === 13 ? (
          <div className="flex flex-col">
            <p  className="text-xl font-light text-center">It is a love test we're giving here. Gotta stop</p>
            <video width="320" height="240" controls preload="none" autoPlay>
              <source src="/nohorny2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : quesIndex === 14 ? (
          <div className="flex flex-col">
            <p  className="text-xl font-light text-center"> Pro Tip : Don't Cheat guys</p>
            <img src="/noenemy.jpg" alt="Present" />
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </main>
  );
}
