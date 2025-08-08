import React from "react";
import StarsRating from "./StarRating";
import { Link } from "react-router-dom";
import { useDescriptionContext } from "../Contexts/DescriptionContext";
import { useCartContext } from "../Contexts/CartContext";
export default function ItemCard({item}){

    const {descriptionItem, setDescriptionItem} = useDescriptionContext();

    const {addToCart, cart} = useCartContext();
    
    const [msg, setMsg] = React.useState({color : "red", text : "", show : false});
    
    return(
        <div className="flex flex-col content-center p-5 shadow-2xl rounded-xl transition-transform duration-200 hover:scale-105 bg-white w-[250px]">
            <div onClick={()=>setDescriptionItem(item)}>
                <Link to="/description" >
                <img src={item.image} alt={item.nom} className="h-[290px] w-[240px] object-contain"/>
                </Link>
            </div>

            <div className="flex flex-col gap-1">
                <Link onClick={()=>setDescriptionItem(prev => item)} to="/description"><p className="leading-5 font-[600]">{item.nom}</p></Link>
                <StarsRating
                 note={item.note}
                />
                <p className="text-[17px] mt-1">{item.prix} &euro;</p>
            </div>

            <div className="h-7">
                {msg.show && 
                  <p className="font-bold" style={{color : msg.color}}>{msg.text}</p>
                }
            </div>

            <button className="h-[40px] bg-blue-950 text-white font-bold rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 mt-2" onClick={()=>{
                addToCart(item,setMsg);
                console.log(cart);
            }}>Add to Cart</button>
        </div>
    )
}