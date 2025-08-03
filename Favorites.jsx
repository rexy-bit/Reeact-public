import React from "react";
import '../css/Favorites.css'
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../Components/MovieCard";
export default function Favorites(){

    const {favorites} = useMovieContext();

    if(favorites){
        return     (     
                <div className="favorites">   

                  <h2>Favorites</h2>
                   <div className="movies-grid">
                        {favorites.map((movie)=>{
                             return(
                          (<MovieCard
                                movie={movie}
                                key={movie.id}
                                />)
                             )
                        })}
                    </div>
                    </div>
        )
    }
    return(

        <div className="favorites-empty">
            <h2>No favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
    )
}