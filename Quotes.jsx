import React from "react";
import data from "../data";
export default function Quotes({currentQuote, setCurrentQuote}){

    const q = data[currentQuote];
    const [fadeKey, setFadeKey] = React.useState(0);
    
    function getNextQuote(){

        if(currentQuote === data.length - 1){
            setCurrentQuote(0);
        }else{
        setCurrentQuote(prev => prev + 1);
        }

        setFadeKey(prev => prev + 1);
    }

    return(
        <div className="quote fade-in" key={fadeKey}>
           <img src={q.image} alt={q.author} className="image zoom"/>   
           <div className="others">     
           <div className="citation">{q.text}</div>
           <div className="author">- {q.author}</div>
           <div className="source">Source : {q.origin}</div>
           </div>

         <button className="next-button" onClick={getNextQuote}>Next</button>
        </div>

    );
}