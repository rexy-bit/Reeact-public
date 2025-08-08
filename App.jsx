import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeHeader from './HomeComponents.jsx/HomeHeader'
import HomeText from './HomeComponents.jsx/HomeText'
import SecondHeader from './StoreComponents.jsx/SecondHeader'
import Store from './Pages/Store'
import { DescriptionProvider } from './Contexts/DescriptionContext'
import Description from './Pages/Description'
import { SearchProvider } from './Contexts/SearchContext'
import Search from './Pages/Search'
import { CartProvider } from './Contexts/CartContext'
import CartHeader from './CartComponents/CartHeader'
import Cart from './Pages/Cart'
function App() {

  return(
    <CartProvider>
    <SearchProvider>
    <DescriptionProvider>
    <main className='flex justify-center items-center'>
    <HomeHeader/>

    <Routes>

       <Route path='/' element={<HomeText/>}/>
       <Route path='/store' element={<>
           <SecondHeader/>
           <Store/>
       </>}/>

       <Route path="/description" element={
           <Description/>

       }/>

       <Route path="/search" element={
        <>
        <SecondHeader/>
         <Search/>
         </>
       }/>

       <Route path='/cart' element={
        <>
          <CartHeader/>
          <Cart/>
        </>
       }/>

    </Routes>

     </main>
     </DescriptionProvider>
     </SearchProvider>
     </CartProvider>
  )
}

export default App
