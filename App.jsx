import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './Components/NavBar'
import Favorites from './pages/Favorites'
import { BrowserRouter } from 'react-router-dom'
import { MovieProvider } from './Contexts/MovieContext'
function App() {
    
  return(
   <MovieProvider>
    <div>
       <NavBar/>
       <main>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
       </main>
    </div>
  </MovieProvider>
  );
}


export default App
