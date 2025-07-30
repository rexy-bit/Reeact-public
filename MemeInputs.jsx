import React from "react";

export default function MemeInputs(props){

    const [topText, setTopText] = React.useState('');
    const [bottomText, setBottomText] = React.useState('');

    function handleTopChange(event){
        
        const value = event.target.value;
    
        setTopText(value);
        props.setMeme(prev=>({
            ...prev,
            topText : value
        }));
    }

    function handleBottomChange(event){
        const value = event.target.value;

        setBottomText(value);
        props.setMeme(prev => (
            {
                ...prev,
                bottomText : value
            }
        ));
    }

    function getMemeImage(){


        const randomIndex = Math.floor(Math.random() * props.allMemes.length);
        const generatedElement = props.allMemes[randomIndex];

        props.setMeme(prev=> (
            {
                ...prev,
                imageSrc : generatedElement.url
            }
        ));

        
    }

    

    return(

        <div className="form">
 
           <div className="inputs">
            <label>Top Text

                  <input 
                  type="text" 
                  className="in"
                  placeholder={props.meme.topText}
                  name="topText"
                  value={topText}
                  onChange={handleTopChange}
                  />
            </label>

            <label>Bottom Text

                <input type="text"
                 className="in"
                 placeholder="Walk into Mordor"
                 bottom='bottomText'
                 value={bottomText}
                 onChange={handleBottomChange}
                 />
            </label>
            </div>

            <button className="get-button"
             onClick={getMemeImage}
            >Get a new meme image 🖼️</button>
        </div>
    );
}