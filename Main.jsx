import React from "react";
import Header from "./Header";
import IngredientsInputs from "./IngredientsInputs";
import IngredientsDisplay from "./IngredientsDisplay";
import ReadyRecipe from "./ReadyRecipe";
import Recipe from "./Recipe";

export default function Main(){

    const [ingredients, setIngredients] = React.useState(()=>{
        const saved = localStorage.getItem('ingredients');

        return saved ? JSON.parse(saved) : 
          ['tomato', 'chedar', 'bread', 'meet']
    });

    const [recipe, setRecipe] = React.useState('');


    React.useEffect(()=>{
        localStorage.setItem('ingredients', JSON.stringify(ingredients));
    }, [ingredients]);

    const recipeSection = React.useRef();

       React.useEffect(()=>{
    
        if(recipe && recipeSection.current){
              recipeSection.current.scrollIntoView({behaviour : "smooth"});
        }
          
         
       }, [recipe])
    

    return (
        <main>
           <Header/>
           <IngredientsInputs
           ingredients={ingredients}
           setIngredients={setIngredients}
           />

           <IngredientsDisplay
           ingredients={ingredients}
           setIngredients={setIngredients}
           />

           <ReadyRecipe
           ingredients={ingredients}
           setIngredients={setIngredients}
           recipe={recipe}
           setRecipe={setRecipe}
           ref={recipeSection}
           />

           <Recipe
           ingredients={ingredients}
           recipe={recipe}
           />
        </main>
    )
}