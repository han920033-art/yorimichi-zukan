"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = Array.from({ length: 90 }, (_, index) => ({
  id: index + 1,
  text:
    index === 0
      ? "初めての場所では、目的地に着く前の時間も印象に残りやすい。"
      : "予定通りに進むより、途中で気になったものに少し寄り道したくなる。",
}));

const options = [
  "とてもそう思う",
  "そう思う",
  "ややそう思う",
  "どちらでもない",
  "あまりそう思わない",
  "そう思わない",
  "まったくそう思わない",
];

export default function TestPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];

  function handleAnswer() {
    if (currentIndex + 1 >= questions.length) {
      router.push("/result");
      return;
    }

    setCurrentIndex(currentIndex + 1);
  }

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1f1f1c]">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#8a7d68]">
          QUESTION {String(currentQuestion.id).padStart(2, "0")} / 90
        </p>

        <div className="mb-12 h-px w-full bg-[#8a7d68]" />

        <h1 className="mb-12 text-3xl font-semibold leading-relaxed sm:text-5xl">
          {currentQuestion.text}
        </h1>

        <div className="grid gap-4">
          {options.map((option) => (
            <button
              key={option}
              onClick={handleAnswer}
              className="border border-[#1f1f1c] px-6 py-5 text-left text-base transition hover:bg-[#1f1f1c] hover:text-[#f4efe6]"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}