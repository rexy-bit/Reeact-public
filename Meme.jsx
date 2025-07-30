import React from "react";

export default function Meme(props){

    return(
        <div className="meme">
            <img src={props.meme.imageSrc} alt="meme image" className="meme-image"/>
                <span className="top">{props.meme.topText}</span>
                <span className="bottom">{props.meme.bottomText}</span>
        </div>
    );
}