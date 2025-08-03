import React from "react";
import MovieCard from "../Components/MovieCard";
import '../css/Home.css'
import { searchMovies, getPopularMovies } from "../services/api";

export default function Home(){

    const [searchQuery, setSearchQuery] = React.useState('');

    function handleSearchQuery(event){
        const value = event.target.value;

        setSearchQuery(value);

    
    }

    const [movies, setMovies] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        const loadPopularMovies = async ()=>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }catch(err){
                console.log(err);
                setError("Failed to load movies");
            }finally{
                setLoading(false);
            }
        }

        loadPopularMovies();
         
    }, []);



    const handleSearch = async (event)=>{

        event.preventDefault();

        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true);

        try{

            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }catch(err){
            console.log(err);
            setError('Failed to search movies');
        } finally{
            setLoading(false);
        }
        
    }

    return(

        <div className="home">

             <form onSubmit={(e)=>{handleSearch(e)}} className="search-form">

                <input 
                type="text" 
                placeholder="Search for movies..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchQuery}
                />

                <button type="submit" className="search-button">Search</button>
             </form>

             {error && 
                <div className="error-message">{error}</div>
             }

             {loading ? 
                <div className="loading">Loading...</div> :  
            
            <div className="movies-grid">
                {movies.map((movie)=>{
                     return(
                  (<MovieCard
                        movie={movie}
                        key={movie.id}
                        />)
                     )
                })}
            </div>
        }
        </div>
    )
}