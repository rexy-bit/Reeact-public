import React from 'react'

function TodoList(){

    
    const [todoList, setTodoList] = React.useState(()=>{
        const saved = localStorage.getItem('todoList');

        return saved ? JSON.parse(saved) : 
            [
        {
            name : 'Make dinner',
            date : '25/07/2025',
            id : '01'
        },{
            name : 'Take shower',
            date : '26/07/2025',
            id : '02'
        }
    ]
    });
    
/*
    const [todoList, setTodoList] = React.useState([
                {
            name : 'Make dinner',
            date : '25/07/2025',
            id : '01'
        },{
            name : 'Take shower',
            date : '26/07/2025',
            id : '02'
        }
    
    ])
*/
    const [inputName, setInputName] = React.useState("");
    const [inputDate, setinputDate] = React.useState("");


    function handleChangeName(event){
     setInputName(event.target.value );
    }

    function handleChangeDate(event){
         setinputDate(event.target.value);
    }

    function addTodo(){

        if(!inputName || !inputDate){
            return;
        }

        const newTodoList = [
            ...todoList,
            {
                name : inputName,
                date : inputDate,
                id : crypto.randomUUID()
            }
        ];

        setTodoList(newTodoList);

        localStorage.setItem('todoList', JSON.stringify(newTodoList));

        setInputName('');
        setinputDate('');

    }


    function deleteTodo(index){

        let newTodoList = todoList.filter((_,i)=> index !== i);

        setTodoList(newTodoList);

        localStorage.setItem('todoList', JSON.stringify(newTodoList));
        
    }

    function moveTaskUp(index){

        let newTodo = [...todoList];

        if(index === 0){
        
            let firstTodo = newTodo.shift();
            newTodo.push(firstTodo);

                    setTodoList(newTodo);

        localStorage.setItem('todoList', JSON.stringify(newTodo));

            return;

        }


        const temp = newTodo[index - 1];
        newTodo[index - 1] = newTodo[index];
        newTodo[index] = temp;
        setTodoList(newTodo);

        localStorage.setItem('todoList', JSON.stringify(newTodo));
    }


    function moveTaskDown(index){

        let newTodoList = [...todoList];

        if(index === (newTodoList.length - 1)){
            const lastTodo = newTodoList.pop();
            newTodoList.unshift(lastTodo);

            setTodoList(newTodoList);
            localStorage.setItem('todoList', JSON.stringify(newTodoList));

            return;
        }

        const temp = newTodoList[index + 1];
        newTodoList[index + 1] = newTodoList[index];
        newTodoList[index] = temp;

        setTodoList(newTodoList);
        localStorage.setItem('todoList', JSON.stringify(newTodoList));

        return;
    }


    return(
        <>
          <div className="todo-content">
            <h1>To-Do-List</h1>

            <div className="inputs">
                <input 
                type="text" 
                className="in" 
                onChange={handleChangeName}
                value={inputName}
                placeholder='Add todo'
                />

                <input 
                type="date" 
                className='in'
                onChange={handleChangeDate}
                value={inputDate}

                />

                <button 
                className="add-button"
                onClick={addTodo}
                >Add</button>
            </div>

            <div className="display-todo">

                {todoList.map((todo,i)=>{

                    return(
                        <div className="todo-div" key={i}>

                            <div className='name'>
                                {todo.name}
                            </div>

                            <div className='name'>
                                {todo.date}
                            </div>

                            <button 
                            className='delete-button'
                            onClick={()=>deleteTodo(i)}
                            
                            >
                                Delete
                            </button>

                            <div className="move-div">
                                <button 
                                className="m"
                                onClick={()=>{moveTaskUp(i)}}
                                >
                                    👆
                                </button>

                                <button className="m"
                                onClick={()=>{moveTaskDown(i)}}
                                >
                                    👇
                                </button>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
          </div>
        </>
    )

}

export default TodoList