import { useState } from 'react'
import Main from './Components/Main'
import { BrowserRouter } from 'react-router-dom';
import './css/App.css'
function App() {
   
  return(

    <BrowserRouter>
       <Main/>
    </BrowserRouter>
    
  );
}

export default App
