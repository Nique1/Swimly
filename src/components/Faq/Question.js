import React, { useState } from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, answer }) => {  //komponent funkcyjny
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = (e) => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="container question">
      <div className="question-title">
        <h4>{title}</h4>
        <button className="question-icons" 
        onClick={handleClick} onMouseDown={(e) => {console.log('Mouse Down'); }} 
        onMouseUp={(e) => {console.log('Mouse Up'); }} 
        onMouseOver={(e) => {console.log('Mouse Over'); }}
        onMouseLeave={(e) => {console.log('Mouse Leave'); }}
        onMouseMove={(e) => {console.log('Mouse Move'); }}
        onMouseOut={(e) => {console.log('Mouse Out'); }}
        onMouseEnter={(e) => {console.log('Mouse Enter'); }} 
         >
          {showAnswer ? (
            <AiOutlineMinus  />
          ) : (
            <AiOutlinePlus color="#1f93df" />
          )}
        </button>
      </div>
      <div className="question-answer">
        {showAnswer && <p className="u-text-small">{answer}</p>}
      </div>
    </div>
  );
};

export default Question;
