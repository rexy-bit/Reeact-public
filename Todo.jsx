import React from "react";
import { useTodoContext } from "../Contexts/TodoContext";
export default function Todo({todo}){

    const {todoList, setTodoList} = useTodoContext();
    
    function deleteTodo(todoId){
        setTodoList(prev=> prev.filter((t)=> t.id !== todoId))
    }

    function toggleTodo(todo){

        setTodoList(prev => prev.map((t)=> t.id === todo.id ? {...t, state : !t.state} : t));
          
    }

    return(

        <div className="flex flex-row w-full justify-between px-10 py-5 rounded-4xl bg-amber-500 text-[18px] items-center transition-transform duration-200 ease-in-out hover:scale-110">
            
                <input 
                type="checkBox" 
                className="w-4"
                checked={todo.state}
                onChange={()=>{toggleTodo(todo)}}
                
                />

                <div>{todo.name}</div>
                <div>{todo.date}</div>

                <button className="bg-red-600 text-white px-5 py-1 rounded-3xl cursor-pointer transition-opacity duration-200 hover:opacity-70 active:opacity-50" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
    );

}