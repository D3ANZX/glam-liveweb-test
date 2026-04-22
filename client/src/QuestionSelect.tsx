import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import "./components/TFstyles.css";
import mj from "./assets/profilePics/mj.png";
import { useEffect } from 'react';





const apiCall = async () => {
  try {
    const res = await fetch("http://localhost:5000/quiz-items");
    const data = await res.json();

    alert(JSON.stringify(data.questions, null, 2));
  } catch (err) {
    console.error(err);
  }
};

function QuestionSelect() {



return (
    <div className= "backG"
    style={{
            backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.7)),
            url(${mj})`,
            backgroundSize: "cover",
            backgroundPosition: "center"}}>
      <div className= "TextMain"> CHOOSE YOUR QUESTION TYPE</div>
      <div className="card">
        <div className="buttonRow">
          <button
  className="quizButton"
  onClick={() => {
    apiCall()
    window.location.href = "/TrueOrFalse"
    }}
  >
    TRUE OR FALSE
  </button>
          <button className="quizButtonAlt"><Link to='/MultipleQues'>MULTIPLE CHOICE</Link></button>
        </div>
      </div>  
    </div>
  );
}
export default QuestionSelect;