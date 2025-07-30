import React from "react";
import { getRecipeFromGemini } from "../ai";
export default function ReadyRecipe(props){

    const [isLoading, setIsLoading] = React.useState(false);

    async function getRecipe(){
          setIsLoading(true);
          const generatedRecipe = await getRecipeFromGemini(props.ingredients);

          props.setRecipe(generatedRecipe);
          console.log(generatedRecipe);
          setIsLoading(false);
    }


    return(
        props.ingredients.length  > 3 && <div className="ready-recipe">

            <div className="ready-div" ref={props.ref}>
                <h3>Ready for a recipe?</h3>
                <p className="generate">Generate a recipe from your list of ingredients</p>
            </div>

            <button 
            className="get-button"
            onClick={getRecipe}
            >
                {isLoading ? "Loading..." : "Get a recipe"}
            </button>
        </div>
    );
}