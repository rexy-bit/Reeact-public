import React, { Children } from "react";
import data from "../data";
const CartContext = React.createContext();

export const useCartContext = ()=> React.useContext(CartContext);

export const CartProvider = ({children})=> {

    const [cart, setCart] = React.useState(()=>{
        const saved = localStorage.getItem('cart');

        return saved ? JSON.parse(saved) : 
           [];
    });
   
    

    React.useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(book, setMsg){

       const trouve = cart.find((b)=> b.titre === book.titre);

        
        if(!trouve){
            setCart(prev => [...prev, {
                ...book,
                quantite : 1
            }]);

            setMsg({
                color : "green",
                text : "✓ Added",
                show : true
            })
        }else{
            setMsg({
                color : "red",
                text : 'Already in cart',
                show : true
            })
        }

        setTimeout(()=>{
            setMsg(prev =>({
                ...prev,
                show : false
            }))
        }, 1500)

        console.log(cart);
    }

    function removeFromCart(bookId){

        setCart(prev => prev.filter((book)=> book.code !== bookId));
    }

    function increaseQuantity(book){

        if(book.quantite + 1 > 10){
            return;
        }
        setCart(prev => prev.map((b)=>b.code === book.code ?
          {...b, quantite : b.quantite + 1} 
          : b
    ));
    }

    function decreaseQuantity(book){
        if(book.quantite - 1 < 1){
            return;
        }

        setCart(prev => prev.map((b)=> b.code === book.code ? 
          {...b, quantite : b.quantite - 1 } : 
            b
          ));
    }

    

    const value = {
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}