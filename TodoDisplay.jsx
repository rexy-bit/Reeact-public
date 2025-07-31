import React from 'react'

export default function TodoDisplay(props){


    function removeTodo(index){

        const newTodoList = props.todoList.filter((_,i)=> i !== index);

        props.setTodoList(newTodoList);
    }

    function toggleTodo(index){

        const newTodoList = [...props.todoList];

        newTodoList[index].done = !newTodoList[index].done;

        props.setTodoList(newTodoList);

    }

    return(
        <div className="todoList">
            
            {props.todoList.map((todo, i)=>{

                return(

                <div className='todo'>

                <input 
                type="checkBox" 
                checked={todo.done}
                onChange={()=>{toggleTodo(i)}}
                
                />

                  <div>{todo.name}</div>

                  <div>{todo.date}</div>

                  <button 
                  className="delete-button"
                  onClick={()=>{removeTodo(i)}}
                  >
                    Delete
                  </button>

                   </div>
                );
                
            })}
        
        </div>
    );
}
