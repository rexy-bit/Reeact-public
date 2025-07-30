import React from "react";
import chefImage from '../assets/chef-claude-icon.png'
export default function Header(){

    return(
        <header>
            <img 
            src={chefImage} 
            alt="chef image" 
            width="70"
            />

            <h1>Chef Gaston 2</h1>
        </header>
    );
}