import { useState } from 'react'
import Header from './Components/Header'
import Store from './Components/Store'
import { SearchProvider } from './Contexts/SearchContext'
import { DescriptionProvider } from './Contexts/DescriptionContext'
import { Routes, Route } from 'react-router-dom'
import Description from './Pages/Description'
import { CartProvider } from './Contexts/CartContext'
import Cart from "./Pages/Cart"
function App() {
 
   

     return(

        <CartProvider>
        <DescriptionProvider>
        <SearchProvider>
        <div>
            
            
            <main className='flex flex-col w-full'>
                
                <Routes>
                    
                    <Route path="/" element={
                        <>
                        <Header/>
                        <Store/>
                        </>
                        }/>

                    <Route path="/description" element={
                        <>
                        <Header/>
                        <Description/>
                        </>
                        }/>

                        <Route path="/cart" element={<Cart/>} />
                    
                </Routes>
                
                
            </main>
        </div>
        </SearchProvider>
        </DescriptionProvider>
        </CartProvider>
     )
}

export default App
