import React from "react";
import TodoInputs from "./TodoInputs";
import TodoDisplay from "./TodoDisplay";
export default function Todo(){

    const [todoList, setTodoList] = React.useState(()=>{
        const saved = localStorage.getItem('todoList');
         return saved ? JSON.parse(saved) : 
           [
            {
                id : "0",
                name : 'Go to school',
                date : '04/09/2025',
                done : false
            },{
                id : '1',
                name : 'Make dinner',
                date:  '05/09/2025',
                done : false
            }
           ];
    });


    React.useEffect(()=>{
        localStorage.setItem('todoList', JSON.stringify(todoList));
    },
     [todoList]);


     return(

        <section>
            <h1>📝To-Do-List</h1>

            <TodoInputs
             todoList={todoList}
             setTodoList={setTodoList}
            />

            <TodoDisplay
             todoList={todoList}
             setTodoList={setTodoList}
            />
        </section>
     );
    


}