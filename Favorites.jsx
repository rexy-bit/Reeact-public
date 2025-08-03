import React from "react";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../Components/MovieCard";
import '../css/Favorites.css'
export default function Favorites(){

    const {favorites} = useMovieContext();

    if(!favorites || favorites.length === 0){
    return(

            <div className="favorites-empty">
            <h2>No favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
    );
    }

    if(favorites){
        return (
        <div className="favorites">
            <h3>Favorites</h3>

            <div className="movies-grid">
                {favorites.map((movie)=>{
                    return(
                        <MovieCard
                        movie={movie}
                        key={movie.id}
                        />
                    )
                })}
            </div>
        </div>
        )
    }


}