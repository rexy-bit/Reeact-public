import React, { Children } from "react";

const SearchContext = React.createContext();

export const useSearchContext =() => React.useContext(SearchContext);

export const SearchProvider = ({children}) => {

    const [search, setSearch] = React.useState(()=>{
        const saved = localStorage.getItem('search');

        return saved ? JSON.parse(saved) : 
           ""
    });

    React.useEffect(()=>{
        localStorage.setItem('search', JSON.stringify(search));
    }, [search]);

    const value={
        search, 
        setSearch
    }
    return(
        <SearchContext.Provider value={value}>
             {children}
        </SearchContext.Provider>
    );
}