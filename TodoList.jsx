import React from "react";
import { useTodoContext } from "../Contexts/TodoContext";
import Todo from "./Todo";

export default function TodoList(){

    const {todoList}  = useTodoContext();

    return(
        <div className="flex flex-col mt-15 gap-5 w-[500px]">
            {todoList.map((todo)=>{
               return(
                <Todo
                todo={todo}
                key={todo.id}
                />
               );
            })}
        </div>
    );
}