import React from "react"
import MovieCard from "./MovieCard"
import Home from "../Pages/Home"
import { Routes, Route } from "react-router-dom"
import Favorites from "../Pages/Favorites"
import NavBar from "./NavBar"
import { MovieProvider } from "../Contexts/MovieContext"
export default function Main(){

     return(
        <MovieProvider>
        <div>
            <NavBar/>
        <main>
           <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/favorites" element={<Favorites />}/>
          </Routes>
        </main>

        </div>
        </MovieProvider>
     )
    
}