import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import "./components/TFstyles.css";
import mj from "./assets/profilePics/mj.png";
function TrueFalse() {
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
          <button className="quizButton">TRUE OR FALSE</button>
          <button className="quizButtonAlt">MULTIPLE CHOICE</button>
        </div>
      </div>  
    </div>
  );
}
export default TrueFalse;