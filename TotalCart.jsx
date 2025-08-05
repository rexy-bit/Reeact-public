import React from "react";
import { useCartContext } from "../Contexts/CartContext";
import BookCartComponent from "./BookCartComponent";
export default function TotalCart(){

    const {cart} = useCartContext();

    return(

        cart.length !== 0 && 
           <div>
              {cart.map((book)=>{
                return(
                    <BookCartComponent
                     book={book}
                     key={book.code}
                    />
                )
              })}
           </div>
    )
}