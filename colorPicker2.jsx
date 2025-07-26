import React from "react";

function ColorPicker(){

  const [color, setColor] = React.useState(()=>{

    const saved = localStorage.getItem('color');

       return saved ? JSON.parse(saved) : 
          "#FFFFFF"
  }
  );

  function saveColor(event){
   setColor(event.target.value);
    
   localStorage.setItem('color', JSON.stringify(event.target.value));
  }

    return(
      <>
         <div className="color-div">

            <h1>Color Picker</h1>

            <div className="display-color" style={{backgroundColor : color}}>
               <p className="color-display">Selected color : {color}</p>
            </div>

            <label>Select a color : </label>

            <input 
            type="color" 
            value={color}
            onChange={saveColor}
            className="color"
            />
         </div>
      </>
    )
}


export default ColorPicker