import React from "react";

export default function IngredientsInputs(props){

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient");
        const trouve = props.ingredients.find((ing)=> ing.toLowerCase() === newIngredient.toLowerCase());

        if(!newIngredient || trouve){
            return;
        }

        const newIngredients = [...props.ingredients, newIngredient];
        
        props.setIngredients(newIngredients);
        
    }

    

    return(

        <form className="inputs" action={addIngredient}>
            
            <input 
            type="text" 
            className="in"
            name="ingredient"
            placeholder="e.g. basilic"
            />

            <button 
            className="add-button"
               
            >+ add ingredient</button>
        </form>
    );
}