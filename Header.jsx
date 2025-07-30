import React from 'react'
import trollImage from '../assets/troll-face.png'
export default function Header(){

    return(
        <header>
            <img src={trollImage} alt="troll image" className='troll-image'
             width="70"
            />

            <h1>Meme Generator</h1>
        </header>
    );
}