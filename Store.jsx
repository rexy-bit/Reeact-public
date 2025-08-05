import React from "react";

import data from "../data";
import BookCard from "./BookCard";
import { useSearchContext } from "../Contexts/SearchContext";
export default function Store(){

    const {search} = useSearchContext();
    let trouve = false;

    if(search){

        

        return(
            <>
            <div className="w-full flex flex-wrap justify-center items-center gap-[30px] mt-10">
            {data.map((book)=>{

                let keyWordCheck = book.keyWords.some((keyWord)=> keyWord.toLowerCase().includes(search.toLowerCase()));

                if(book.titre.toLowerCase().includes(search.toLowerCase()) || book.auteur.toLowerCase().includes(search.toLowerCase()) || book.categorie.toLowerCase().includes(search.toLowerCase()) || keyWordCheck){
                    trouve = true;
                return(
               <BookCard
               book={book}
               key={book.code}
               />
                )
            }
           })
        
        }
        </div>

        {!trouve && 
            <h1 className="text-[20px] text-center">Not found.</h1>
        }
    </>
        

        )
    }

    
    return(
        <div className="w-full flex flex-wrap justify-center items-center gap-[30px] mt-10">
            {data.map((book)=>{
                return(
               <BookCard
               book={book}
               key={book.code}
               />
                )
            })}
        </div>
    )
}