import React from "react";
import { useCartContext } from "../Contexts/CartContext";

export default function BookCartComponent({book}){


    const { removeFromCart, increaseQuantity, decreaseQuantity} = useCartContext();

    return(

        

            <div className="flex flex-row justify-center items-center p-5 border border-gray-300 rounded-s gap-5">
                <div>
                    <img src={book.image} alt={book.author} className="w-[150px] h-[200px] object-contain"/>
                    
                </div>

                <div className="flex flex-col justify-center gap-3">
                    <p className="text-[1.1em] w-[150px] leading-4 text-center font-bold text-yellow-600">{book.titre}</p>
                    <p className="text-[1em] font-bold">{book.prix} Dzd</p>
                    <div className="flex flex-row gap-2 ">
                        Quantity : {book.quantite}
                    <button onClick={()=> increaseQuantity(book)}>+</button> 
                    <button onClick={()=> decreaseQuantity(book)}>-</button> 
                    </div>

                    <div>

                        <button onClick={()=> removeFromCart(book.code) }>Delete</button>
                    </div>

                </div>
            </div>
        
    );

}