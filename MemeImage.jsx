import React from "react";

export default function MemeImage({meme, setMeme}){

    return(

        <div className="meme">
            <img 
            src={meme.image} 
            alt="meme image" 
            className="image"/>

            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
        </div>
    )
}