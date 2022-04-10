import React from 'react';
import Question from "./Question";
import { questions } from "./text.js";
import { MdOutlineLibraryBooks } from "react-icons/md";

const Faq=() => { //mapowanie 2 //komponent funkcyjny
    return (
        <section id="faq">
          <div className="container faq">
            <div className="u-title" >
              <MdOutlineLibraryBooks color="darkblue" size={50} />
              <h2>FAQs</h2>
              <p className="u-text-small">
              Weird Swimmer Facts
              </p>
            </div>
            <div className="questions">
              {questions.map((question) => ( 
                <Question
                  key={question.id}
                  title={question.title}
                  answer={question.answer}
                />
              ))}
            </div>
          </div>
        </section>
        );
}

export default Faq;
