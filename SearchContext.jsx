import React from "react";

const SearchContext = React.createContext();

export const useSearchContext = ()=> React.useContext(SearchContext);


export const SearchProvider = ({children})=> {

    const [search, setSearch] = React.useState(null);
    const [goSearch, setGoSearch] = React.useState(false);
    const value = {
        search,
        setSearch
    };

    return(
        <SearchContext.Provider value={value}>
              {children}
        </SearchContext.Provider>
    )
}

