import React from "react";
import { useTodoContext } from "../Contexts/TodoContext";
export default function TodoInputs(){


    const {todoList, setTodoList} = useTodoContext();

    const [msg, setMsg] = React.useState({color : "red", text : "", show : false})

    function addTodo(e){

        e.preventDefault();

        const formData = new FormData(e.target);

        const name = formData.get("todo");
        const date = formData.get("date");

        if(!name || !date){

            setMsg(prev =>({
                color : "red", text : "please enter all the information", show : true
            }));

            setTimeout(()=>{
                        setMsg(prev =>({
                ...prev,
                show : false
               }));

            }, 1500)

           return;
        }

        const newTodo = {
            id : crypto.randomUUID(),
            name,
            date,
            state :false
        }

        setTodoList(prev => [...prev, newTodo]);
        console.log(todoList);

        e.target.reset();


    }
    return(

        <>
         <h1 className="text-[2em] mt-[20px] font-black underline text-white">To-Do-List</h1>
        <form onSubmit={addTodo} className="grid grid-cols-[200px_150px_100px] gap-[20px] mt-[30px]">
            <input 
            type="text" 
            className="border-[1px] border-gray-50 rounded-md px-[15px] py-[10px] bg-amber-50" 
            name="todo"
            placeholder="e.g. go to school"
            />

            <input 
            type="date" 
            name="date"
            className="border-[1px] border-gray-50 rounded-md px-[15px] py-[10px] bg-amber-50 text-[13px]" 
            
            />

            <button className="border-none bg-blue-300 text-blue-950 font-bold
            text-[15px] rounded-md cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-105" type="submit">+ add todo</button>
        </form>
        </>
    );
}