import { useMemo, useState } from "react";
type questionProps = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

function Quesbody2({
  question,
  correct_answer,
  incorrect_answers,
}: questionProps) {
const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const choices = useMemo(() => {
    const allChoices = [
      { text: correct_answer, correct: true },
      { text: incorrect_answers[0], correct: false },
      { text: incorrect_answers[1], correct: false },
      { text: incorrect_answers[2], correct: false },
    ];

    return [...allChoices].sort(() => Math.random() - 0.5);
  }, [question, correct_answer, incorrect_answers]);

  const baseColors = [
    "bg-red-800",
    "bg-green-800",
    "bg-blue-900",
    "bg-yellow-900",
  ];

  const getButtonColor = (choice: { correct: boolean }, index: number) => {
    if (selectedIndex === null) {
      return baseColors[index];
    }

    if (choice.correct) {
      return "bg-green-600";
    }

    if (selectedIndex === index && !choice.correct) {
      return "bg-red-600";
    }

    return "bg-gray-500";
  };

  return (
    <div className="mt-20 h-100 w-screen flex justify-center">
      <div
        id="card"
        className="absolute h-max w-80 bg-purple-800 rounded-2xl p-7"
      >
        <div className="bg-white rounded-2xl p-5">
          <h1>{question}</h1>
        </div>

        {choices.map((choice, index) => (
          <button
            key={index}
            disabled={selectedIndex !== null}
            onClick={() => setSelectedIndex(index)}
            className={`${getButtonColor(
              choice,
              index
            )} mt-5 flex items-center justify-center h-10 w-full text-white font-semibold w-full rounded-lg`}
          >
            {String.fromCharCode(65 + index)}. {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quesbody2;