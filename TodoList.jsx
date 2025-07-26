import React from 'react'

function TodoListinputs({todoList, setTodoList}){

    const [inputName, setInputName] = React.useState('');
    const [inputDate, setInputDate] = React.useState('');

    function handleChangeName(event){
        setInputName(event.target.value);
    }

    function handleChangeDate(event){
        setInputDate(event.target.value);
    }

    function addTodoList(){

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

        setInputDate('');
        setInputName('');


    }


    return(
        <>
          <div className="inputs">
            <input 
            type="text"
             className="in" 
             placeholder='Todo name'
             value={inputName}
             onChange={handleChangeName}

             />

             <input 
             type="date"
              className="in" 
              value={inputDate}
              onChange={handleChangeDate}
              />

              <button 
              className="add-button"
              onClick={addTodoList}
              >
                Add
              </button>
          </div>
        </>
    );

}


function TodoListRender({todoList, setTodoList}){
  

     function deleteTodo(index){
        const newTodoList = todoList.filter((_,i)=>i !== index);
        setTodoList(newTodoList);

        localStorage.setItem('todoList', JSON.stringify(newTodoList));
     }


     function moveTaskUp(index){

        const newTodoList = [...todoList];
         if(index === 0){
            const firstTodo = newTodoList.shift();

            newTodoList.push(firstTodo);

            setTodoList(newTodoList);
            localStorage.setItem('todoList', JSON.stringify(newTodoList));

            return;
         }

         let temp = newTodoList[index - 1];
         newTodoList[index - 1] = newTodoList[index];
         newTodoList[index] = temp;

         setTodoList(newTodoList);
         localStorage.setItem('todoList', JSON.stringify(newTodoList));
        
     }


     function moveTaskDown(index){

        let newTodoList = [...todoList];

        if(index === (todoList.length - 1)){
             const lastTodo = newTodoList.pop();
            newTodoList.unshift(lastTodo);

            setTodoList(newTodoList);
            localStorage.setItem('todoList', JSON.stringify(newTodoList));
            
            return;
        }

        let temp = newTodoList[index + 1];
        newTodoList[index + 1] = newTodoList[index];
        newTodoList[index] = temp;

        setTodoList(newTodoList);
        localStorage.setItem('todoList', JSON.stringify(newTodoList));
     }

     return(

        <>
           <div className="display-todo">

              {todoList.map((todo, i)=>{
                return(
                    <>
                <div className="todo-div" key={todo.id}>
                    <div>{todo.name}</div>
                    <div>{todo.date}</div>

                    <button 
                    className="delete-button"
                    onClick={()=>{deleteTodo(i)}}
                    >
                        Delete
                    </button>

                    <div className="move-buttons">
                        <button className="m"
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
                </>
                );
              })}
             
           
           </div>
        </>
     );

}

function TodoListTitle(){

    return(
        <h1>
            To-Do-List
        </h1>
    )
}
function TodoList(){

    const [todoList, setTodoList] = React.useState(()=>{

        const saved = localStorage.getItem('todoList');

        return saved ? JSON.parse(saved) : 
            [
        {
            name : 'Make dinner',
            date : '26/07/2025',
            id : '0'
        },{
            name : 'Take a shower',
            date : '27/07/2025',
            id : '1'
        },{
            name: 'Go to Ardis',
            date : '27/07/2025',
            id : '2'
        }
    ];
    });


    return(

        <>
           <div className="todoList">

              <TodoListTitle/>

              <TodoListinputs
               todoList={todoList}
               setTodoList={setTodoList}
              />

              <TodoListRender
              todoList={todoList}
              setTodoList={setTodoList}

              />
           </div>
        </>
    );
    
}

export default TodoList