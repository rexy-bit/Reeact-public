import React from "react";
import { getRecipeFromGemini } from "../ai";
export default function ReadyRecipe({ingredients, setIngredients, recipe, setRecipe, ref}){

    const [isLoading, setIsLoading] = React.useState(false);
    async function getRecipe(){
         
        setIsLoading(true);

        const generatedRecipe = await getRecipeFromGemini(ingredients);
        console.log(generatedRecipe);
        setRecipe(generatedRecipe);

         setIsLoading(false);
    }

    return(
        ingredients.length > 3 && <div className="ready-recipe" ref={ref}>
            <div className="ready">
                <h3>Ready for a recipe?</h3>
                <p className="generate">Generate a recipe from your list of ingredients</p>
            </div>

            <button className="get-button" onClick={getRecipe}>
                
                {isLoading ? "...Loading" : "Get a recipe"}
            </button>
        </div>
    );
}