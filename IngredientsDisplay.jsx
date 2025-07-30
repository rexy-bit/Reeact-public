import React from "react";

export default function IngredientsDisplay(props){

    function removeIngredient(index){
        const newIngredients = props.ingredients.filter((_,i)=> i !== index);


        props.setIngredients(newIngredients);
    }

    return(

        <div className="display-ingredients">
            <h2>Ingredients in hand:</h2>

            <div className="ingredients">
                {props.ingredients.map((ingredient,i)=>{
                    return(
                        <li key={i} onClick={()=>{removeIngredient(i)}}>{ingredient}</li>
                    )
                })}
            </div>
        </div>
    );
}