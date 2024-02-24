"use client";
import { useEffect, useState } from "react";
import "./result.css";
export default function Result() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false); 
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText1(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen mb-40">
{isLoading ? (
        <div className="loading-screen">
          <p>Calculating your Love Test score...</p>
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <>
          <h1 className="font-bold text-2xl">Remember</h1>
          <h1 className={`text-xl font-semibold fade ${showText1 ? "fade-in" : "hidden"}`}>
            The 4th step to getting a girl is to
          </h1>
          <h1 className={`text-xl font-semibold ${showText ? "fade-in" : "hidden"}`}>
            Follow your passion
          </h1>
          <video width="320" height="240" controls preload="none" autoPlay>
            <source src="/nhpadhai.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}
      </div>
  );
}
