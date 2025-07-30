import React from "react";

export default function MemeInputs(props){

     const [topText, setTopText] = React.useState('');
     const [bottomText, setBottomText] = React.useState('');

     function saveTopText(event){
        const value = event.target.value;

         setTopText(value);

         props.setMeme(prev=>({
            ...prev,
            topText : value
         }));

     }

     function saveBottomText(event){

        const value = event.target.value;

        setBottomText(value);

        props.setMeme(prev=>({
            ...prev,
            bottomText: value
        }));
     }

     function getImage(){

        const randomIndex = Math.floor(Math.random() * props.allMemes.length);
        const newImageUrl = props.allMemes[randomIndex].url;

        props.setMeme(prev=>({
            ...prev,
            imageUrl : newImageUrl
        }));
     }

       return(

           <div className="inputs">
 
             <div className="labels">
              <label>Top Text
                 <input 
                 type="text" 
                 className="in" 
                 name="top"
                 placeholder="Some thing different"
                 value={topText}
                 onChange={saveTopText}
                 />
              </label>

              <label>Bottom Text

                  <input 
                  type="text" 
                  name="bottom"
                  className="in"
                  placeholder="Walk into Mordor"
                  value={bottomText}
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