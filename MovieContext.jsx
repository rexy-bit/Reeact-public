import React from "react";

const MovieContext = React.createContext();

export const useMovieContext = ()=> React.useContext(MovieContext);

export const MovieProvider = ({children}) =>{

    const [favorites, setFavorites] = React.useState(()=>{
        const saved = localStorage.getItem('favorites');

        return saved ? JSON.parse(saved) : 
           []
    });



    React.useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
      
        setFavorites(prev => [...prev, movie]);
    }

    const removeFromFavorites = (movieId) =>{
        setFavorites(prev => prev.filter((movie)=> movie.id !== movieId));
    }

    const isFavorite = (movieId)=>{
       return favorites.some((m)=> m.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    };

    return(
        <MovieContext.Provider value={value}>
             {children}

        </MovieContext.Provider>
    )
}