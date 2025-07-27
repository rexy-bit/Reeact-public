import React from "react";
import MainComp from "./MainComp.jsx";

function Header(){

    return (
        <header>

            <img src="src/assets/react.svg" alt="" className="react-logo"/>

            <div className="header-text">
                ReactFacts
            </div>
        
        </header>
    )
}
function PageReact(){


    return(
        <>
        <Header/>
        <MainComp/>
        </>
    );
}

export default PageReact