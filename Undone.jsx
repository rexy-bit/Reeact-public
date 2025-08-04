import React from "react";
import { useTodoContext } from "../Contexts/TodoContext";
import Todo from "../Components/Todo";
export default function Undone(){

    const {todoList} = useTodoContext();

    return(
             <div className="flex flex-col justify-center items-center">
                <h1 className="text-[2.2em] text-white mt-12 font-black underline">Undone</h1>
                <div className="flex flex-col mt-15 gap-5 w-[500px]">
                    {todoList.map((todo)=>{
                       return(
                        !todo.state && <Todo
                        todo={todo}
                        key={todo.id}
                        />
                       )
                    })}
                </div>
            </div>
    )
}