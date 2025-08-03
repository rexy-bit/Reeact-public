import React from "react";
import { Link } from "react-router-dom";
import '../css/NavBar.css'
export default function NavBar(){

    return(
        <nav className="nav-bar">
            <div className="nav-bar-brand">
                <Link to="/">Movie App</Link>
            </div>

            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </nav>
    )
}