import React from "react";

export default function IngredientsDisplay({ingredients, setIngredients}){

    function removeIngredient(index){
        const newIngredients = ingredients.filter((_,i)=>i !== index);

        setIngredients(newIngredients);
    }

    return(

       <div className="display-ingredients">
        <h2>Ingredients on hand:</h2>
        <div className="ingredients">

           {ingredients.map((ingredient,i)=>{
            return(
              <li key={i} onClick={()=>{removeIngredient(i)}}>{ingredient}</li>
            );
           })}
        </div>
        </div>
    );
}