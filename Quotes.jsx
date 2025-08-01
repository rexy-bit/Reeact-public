import React from "react";
import data from "../data";
export default function Quotes({currentQuote, setCurrentQuote}){

    const q = data[currentQuote];
    const [fadeKey, setFadeKey] = React.useState(0);

    function goRight(){

        if(currentQuote === (data.length - 1)){
            setCurrentQuote(0);
        }else{
            setCurrentQuote(prev => prev + 1);
        }

        setFadeKey(prev => prev + 1);
    }

    function goLeft(){
        if(currentQuote === 0){
            setCurrentQuote(data.length - 1);
        }else{
            setCurrentQuote(prev => prev - 1);
        }

        setFadeKey(prev => prev + 1);
    }
    
    return(
        <div className="quote fade-in" key={fadeKey}>

            <img src={q.image} alt={q.author} className="image zoom"/>

            <div className="others" >
                <div className="citation">{q.text}</div>
                <div className="author">- {q.author}</div>
                <div className="source">Source : {q.origin}</div>
                <div className="era">Era : {q.era}</div>

            </div>

            <div className="buttons">
                <div className="left" onClick={goLeft}>&#10094;</div>
                <div className="right" onClick={goRight}>&#10095;</div>
            </div>

            <p className="current">Quote {currentQuote + 1}/{data.length}</p>

        </div>
    );
    
}