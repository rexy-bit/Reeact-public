import React from "react";
import ReactMarkdown from 'https://esm.sh/react-markdown@7'
export default function Recipe(props){

    return(

        (props.recipe && props.ingredients.length > 3) && <div className="recipe">
            <h2>Chef Gaston recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </div>
    )
}