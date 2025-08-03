import React from "react";
import { getPopularMovies, searchMovies } from "../api";
import MovieCard from "../Components/MovieCard";
import '../css/Home.css'
export default function Home(){


    const [searchQuery, setSearchQuery] = React.useState('');

    function saveSearchQuery(event){
        const value = event.target.value;

        setSearchQuery(value);
    }

    const [movies, setMovies] = React.useState([]);

    

    React.useEffect(()=>{
      
      const loadPopularMovies = async () => {
          
      
        try{
            const popularMovies = await getPopularMovies();

            setMovies(popularMovies);
        }catch(err){
            console.log('Error : ', err);
        }
       }

       loadPopularMovies();
    },[]);

    const handleSearch = async (event) => {
         event.preventDefault();

         if(!searchQuery) return;

         try{
            const searchResult = await searchMovies(searchQuery);
            setMovies(searchResult);
         }catch(err){
            console.log(err);

         }

    }
    return(

        <div className="home">

            <form className="form" onSubmit={handleSearch}>
                <input 
                type="text" 
                className="search-input" 
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={saveSearchQuery}
                />

                <button className="search-button" type="submit">Search</button>

            </form>

            <div className="movies-grid">
                {movies.map((movie)=>{
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