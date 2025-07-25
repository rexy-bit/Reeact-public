import React from "react";

function ColorPicker(){

      const [color, setColor] = React.useState("#FFFFFF");

      function handleColorChange(event){
        setColor(event.target.value);
      }


   return (
    <>
       <div className="color-content">
        <h2>Color Picker</h2>

        <div className="display-color" style={{backgroundColor : color}}>
                
                <p className="color-display">Selected Color : {color}</p>
        </div>

            <label>Select a color : </label>

            <input 
            type="color" 
            className="input-color"
            value={color}
            onChange={handleColorChange}
            />
       </div>


    </>
   );
}


export default ColorPicker