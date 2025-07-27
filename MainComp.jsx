import React from "react";

function MainComp(){

    return(
        <div className="main-div">
            <h1 className="main-text">
                Fun Fact about React
            </h1>

            <div className="facts">
               <li>Was first releast in 2013</li>
               <li>Was originnaly created by jordan walke</li>
               <li>Has well over 100k stars on GitHub</li>
               <li>Is maintained by Meta</li>
               <li>Powers thousands of entreprise apps, including mobile apps</li>
            </div>
        </div>
    );
}

export default MainComp