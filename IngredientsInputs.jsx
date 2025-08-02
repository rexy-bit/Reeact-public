import React from "react";

export default function IngredientsInputs({ingredients, setIngredients}){

    const [msg, setMsg] = React.useState({color : "red", show : false, text : ''});


    function addIngredient(formData){

        const newIngredient = formData.get("ingredient");

        let trouve = ingredients.find((ing)=> ing.toLowerCase() === newIngredient.toLowerCase());

        if(!newIngredient){
           setMsg(prev=> ({
            ...prev,
            show : true, text : 'Please enter an ingredient before submitting'
           }));

           setTimeout(()=>{
            setMsg(prev=> ({
            ...prev,
            show : false
           }));

           }, 1500);

           return;
        }else if(trouve){

            setMsg(prev=> ({
            ...prev,
            show : true, text : 'The ingredient already exists'
           }));

           setTimeout(()=>{
            setMsg(prev=> ({
            ...prev,
            show : false
           }));

           }, 1500);

           return;

        }

        const newIngredients = [...ingredients, newIngredient];

        setIngredients(newIngredients);


    }


    return(

        <form action={addIngredient}>

           <div className="inputs">
            <input 
            type="text" 
            className="in" 
            name="ingredient"
            placeholder="e.g parsley"
            />

            <button className="add-button">+ add ingredient</button>
            </div>

            {msg.show && 
              <p className="msg" style={{color : msg.color}}>{msg.text}</p>
            }
        </form>
    );
}