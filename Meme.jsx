import React from "react";

export default function Meme(props){

    
    return(

        <div className="meme">
            <img 
            src={props.meme.imageUrl} 
            alt="meme image" 
            className="image" />

            <span className="top">{props.meme.topText}</span>
            <span className="bottom">{props.meme.bottomText}</span>
        </div>
    );
}