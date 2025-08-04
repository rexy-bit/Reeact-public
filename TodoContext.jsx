import React from "react";

const TodoContext = React.createContext();

export const useTodoContext = ()=> React.useContext(TodoContext);

export const TodoProvider = ({children})=>{

    const [todoList, setTodoList] = React.useState(()=>{
        const saved = localStorage.getItem('todoList');

        return saved ? JSON.parse(saved) : 
           [
            {
                id : 1,
                name : 'Go to uni',
                date : '13/09/2025',
                state : false
            },{
                id : 2,
                name : 'Make dinner',
                date : '4/08/2025',
                state : false
            }
           ];
    });

    React.useEffect(()=>{
        localStorage.setItem('todoList', JSON.stringify(todoList));

    }, [todoList]);

    const value = {
        todoList,
        setTodoList
    }

    return(
        <TodoContext.Provider value={value}>
             {children}
        </TodoContext.Provider>
    );
}