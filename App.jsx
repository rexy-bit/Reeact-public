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
function App() {

  return(
    <SearchProvider>
    <DescriptionProvider>
    <main>
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
    </Routes>

     </main>
     </DescriptionProvider>
     </SearchProvider>
  )
}

export default App
