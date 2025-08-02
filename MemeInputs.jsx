import React from "react";


export default function MemeInputs({meme, setMeme, allMeme, setAllMeme}){
    
    const [inputTop, setInputTop] = React.useState('');
    const [inputBottom, setInputBottom] = React.useState('');

    function saveTopText(event){

        const value = event.target.value;

        setInputTop(value);

        setMeme(prev => ({
            ...prev,
            topText : value
        }));

    }

    

    function saveBottomText(event){

        const value = event.target.value;

        setInputBottom(value);

        setMeme(prev => ({
            ...prev, 
            bottomText : value
        }));

    }

    function getImage(){

        console.log(allMeme);

        const randomIndex = Math.floor(Math.random() * (allMeme.length - 1));

        const image = allMeme[randomIndex].url;

        setMeme(prev => ({
            ...prev,
            image : image
        }));
    }
    return(
        <div className="inputs">

          <div className="inp">
            <label htmlFor="">Top Text
            <input 
            type="text" 
            className="in" 
            placeholder="Some thing different"
            value={inputTop}
            onChange={saveTopText}
            />
            </label>

            <label htmlFor="">Bottom Text
                <input 
                type="text" 
                className="in" 
                placeholder="Walk into Mordor"
                value={inputBottom}
                onChange={saveBottomText}
                />
            </label>
          </div>

          <button 
          className="get-button"
          onClick={getImage}
          >Get a new meme image</button>
          
        </div>
    );
}