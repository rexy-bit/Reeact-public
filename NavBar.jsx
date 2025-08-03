import React from "react";
import { Link } from "react-router-dom";
import '../css/NavBar.css'
export default function NavBar(){

    return(
        <header>
            <h2>Movie App</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </header>
    );
}