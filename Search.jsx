import React from "react";
import { useSearchContext } from "../Contexts/SearchContext";
import data from "../data";
import ItemCard from "../StoreComponents.jsx/ItemCard";
export default function Search(){

    const {search} = useSearchContext();

    if(!search) return <h1>Not found</h1>

    const searchLower = search.toLowerCase();
    return(
        <div className="pt-[50px] mt-30 flex flex-wrap gap-20 px-10 items-center justify-center">
            {data.map((item)=>{
                let keyWordCheck = item.keyWords.some((keyWord)=> keyWord.toLowerCase().includes(search.toLowerCase()));
                if(item.nom.toLowerCase().includes(searchLower) || item.categorie.toLowerCase().includes(searchLower) || keyWordCheck){
                    return(
                        <ItemCard
                        item={item}
                        key={item.code}
                        />
                    );
                }
            })}
        </div>
    )
}