import React  from "react";


export default function TodoInputs(props){


    function addTodo(formData){

        const name = formData.get("name");
        const date = formData.get("date");

        if(!name || !date){
            return;
        }
        
        const newTodoList = [...props.todoList, {
            id : crypto.randomUUID(),
            name,
            date,
            done: false
        }];

        props.setTodoList(newTodoList);

    }
     
    return(

        <form action={addTodo}>

            <input 
            type="text" 
            className="in"
            name="name"
            placeholder="e.g. make dinner"
            />

            <input 
            type="date"
            className="in"
            name="date"
            />

            <button className="add-button">
                Add
            </button>


        </form>
    );
}