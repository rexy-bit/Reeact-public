import React from "react";
import trollFace from '../assets/troll-face.png'


export default function Header(){

    return(

        <header>
            <img src={trollFace} alt="trll face" width="60" className="troll"/>
            <h1>Meme Generator</h1>
        </header>
    );
}