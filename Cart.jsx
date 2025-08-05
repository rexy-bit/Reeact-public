import React from "react";
import CartHeader from "../Components/CartHeader";
import TotalCart from "../Components/TotalCart";
export default function Cart(){
    
    return(
        <>
        <main className="w-full flex flex-col items-center content-center">
          <CartHeader/>

          <TotalCart/>
          </main>
        </>
    )
}