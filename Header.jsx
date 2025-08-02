import React from "react";
import gastroAi from "../assets/chef-claude-icon.png"
export default function Header(){

    return(
        <header>

            <img src={gastroAi} alt='chef icon' width="70" className="chef-icon"/>

            <h1>Gastro AI</h1>
        </header>
    );
}