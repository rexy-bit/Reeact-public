import React from "react";

import { Link } from "react-router-dom";


export default function NavBar(){

    return(
        <header className="top-0 flex flex-row w-full items-center justify-between bg-blue-950 h-[55px] px-[10px] fixed">
            <h1 className="text-[1.8em] font-black text-indigo-500">To-Do-List</h1>

           <nav className="flex flex-row items-center gap-[20px] text-indigo-500 font-bold text-[1.1em] ">
            <Link to="/" className="cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">Todos</Link>
            <Link to="/done" className="cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">Done</Link>
            <Link to="/undone" className="cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">Undone</Link>
            </nav>
        </header>
    );
}