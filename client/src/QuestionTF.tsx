import Quesbody from "./components/Quesbody";
import { useEffect, useState, useRef } from "react";
import vinyl from './assets/vinyl.png'
interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  category: string;
  difficulty: string;
}

function QuestionTF() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    async function loadQuiz() {
      try {
        const res = await fetch("http://localhost:5000/quiz-items-tf");
        const data = await res.json();

        setQuestions(data.questions || []);
      } catch (err) {
        console.error("Failed to load quiz:", err);
      } finally {
        setLoading(false);
      }
    }

    loadQuiz();
  }, []);

  if (loading) {
    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <img src={vinyl} alt="" className='h-40 w-40 animate-spin' />
        </div>
    )
  }

  if (!questions.length) {
    return <h2>No questions found</h2>;
  }

  return (
    <div className="mt-30 h-max w-screen flex flex-col justify-center bg-gradient-to-br from-gray-900 to-purple-900">
      {questions.map((q) => (
        <Quesbody
          key={q.question}
          question={q.question}
        />
      ))}
    </div>
  );
}

export default QuestionTF;