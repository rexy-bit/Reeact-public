import { useState } from 'react'
import NavBar from './Components/NavBar'
import {Routes, Route} from 'react-router-dom'
import TodoInputs from './Components/TodoInputs'

import { TodoProvider } from './Contexts/TodoContext';
import TodoList from './Components/TodoList';
import Done from './pages/Done';
import Undone from './pages/Undone';
function App() {

  return(
    <TodoProvider>
  <div className='w-full'>
      <NavBar/>

      <main className='flex flex-col justify-center items-center'>
        <Routes>
          <Route path="/" element={
               <>
                 <TodoInputs/>
                 <TodoList/>
               </>

          }/>
      

        
          <Route path="/done" element={<Done/>}/>
          <Route path="/undone" element={<Undone/>}/>
        </Routes>
      </main>
  </div>
  </TodoProvider>
  );
}

export default App
