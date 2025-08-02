import React from "react";
import ReactMarkdown from 'https://esm.sh/react-markdown@7'

export default function Recipe({ingredients, recipe}){

    return(
        (recipe && ingredients.length > 3) && <div className="recipe">

            <h2>Gastro AI recommends : </h2>
           <ReactMarkdown>{recipe}</ReactMarkdown>
        </div>
    )
}