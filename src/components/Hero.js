"use client";

import { useRouter } from "next/navigation";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Hero({ data }) {

  return (
    <main className={`${montserrat.className} m-10`}>
      <h1 className="font-semibold text-xl mb-2">
        The True Love Quiz: Find Out If You've Met Your One True Love
      </h1>
      <div className="flex justify-start items-center mb-4">
        <img
          src="/shubham.png"
          alt="profile"
          className="w-[50px] h-[50px] rounded-full"
        />
        <div>
          <p className="font-light text-xs">For Shubham Choudhary</p>
          <p className="font-light text-xs"></p>
        </div>
      </div>
      <Link href="/quiz">
        <button className=" btn btn-secondary">Start Quiz</button>
      </Link>
      <div>
        <h2 className="font-bold text-xl">Question excerpt</h2>
        {data.map((question, index) => (
          <div key={index} className="mt-4">
            <p className="font-bold text-lg">{`${index+1}. ${question.question}`}</p>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option.answer}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
