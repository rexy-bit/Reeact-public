import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSearchContext } from "../Contexts/SearchContext";
import { useNavigate } from "react-router-dom";
export default function SecondHeader(){

    const {setSearch} = useSearchContext();
    const navigate = useNavigate();
    
    function handleFormSubmit(e){
      e.preventDefault();

      const formData = new FormData(e.target);
      const searchInput = formData.get("search");

      if(!searchInput){
        return;
      }

      setSearch(prev => searchInput);
      e.target.reset();
      navigate('/search');
    }

    return(
        <header className="flex flex-row justify-center items-center h-[50px] w-full bg-blue-900 fixed top-[60px]">
            <form onSubmit={handleFormSubmit} className="flex flex-row justify-center items-center">
                <input 
                type="text" 
                name="search"
                className="w-[600px] bg-gray-100 text-[14px] px-[10px] h-[30px] rounded-s border-blue-600 border z-1 max-[770px]:w-[400px] max-[535px]:w-[300px] max-[431px]:w-[250px]"
                placeholder="Search..."
                />
                <button type="submit" className="bg-blue-300 h-[30px] ml-[-3px] w-[50px] rounded-r-[3px] cursor-pointer transition-opacity duration-200 hover:opacity-70 active:opacity-50 z-50"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
        </header>
    );
}