import React from "react";
import Quotes from "./Quotes";
export default function Main(){

    const [currentQuote, setCurrentQuote] = React.useState(()=>{
        const saved = localStorage.getItem('currentQuote');

        return saved ? JSON.parse(saved) : 
            0
    });

    React.useEffect(()=>{
        localStorage.setItem('currentQuote', JSON.stringify(currentQuote));
    }, [currentQuote]);


    return(
        <div className="container">
            <h1>Wisdom of Legends 🪶</h1>

            <Quotes
            currentQuote={currentQuote}
            setCurrentQuote={setCurrentQuote}
            />
        </div>
    )
}