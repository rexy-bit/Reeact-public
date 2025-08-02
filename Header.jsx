import React from "react";
import troll from "../assets/troll-face.png"
export default function Header(){
      
    return(
        <header>
            <img src={troll} alt="troll-face" className="troll-face" width="70"/>

            <h1>Meme Generator</h1>
        </header>
    );
}