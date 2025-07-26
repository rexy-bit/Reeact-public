import React from "react";


function TodoList(){

    const [todoList, setTodoList] = React.useState(()=>{

        const saved = localStorage.getItem('todoList');

        return saved ? JSON.parse(saved) : 
           [
        {
            name : "Make dinner",
            date : '26/07/2025',
            id : '0'
        },{
            name : "Go to kouba",
            date : '26/07/2025',
            id : '1'
        }
       ];
    });
   

    const [inputName, setInputName] = React.useState("");
    const [inputDate, setInputDate] = React.useState("");

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

        const newList = [
            ...todoList,
            {
                name : inputName,
                date : inputDate,
                id : crypto.randomUUID()
            }
        ];

        setTodoList(newList);

        localStorage.setItem('todoList', JSON.stringify(newList));

        setInputName('');
        setInputDate('');
    }


    function removeList(index){

        const newTodoList = todoList.filter((_,i)=>i !== index );

        setTodoList(newTodoList);

        localStorage.setItem('todoList', JSON.stringify(newTodoList));

    }

    function movetaskUp(index){

        let newTodoList = [...todoList];

         if(index === 0){
            let firstTodo = newTodoList.shift();

            newTodoList.push(firstTodo);

            setTodoList(newTodoList);
            localStorage.setItem('todoList', JSON.stringify(newTodoList));

            return;
         }

         let temp = newTodoList[index];
         newTodoList[index] = newTodoList[index - 1];
         newTodoList[index - 1] = temp;

         setTodoList(newTodoList);
         localStorage.setItem('todoList', JSON.stringify(newTodoList));

    }

    function moveTaskDown(index){

        const newTodoList = [...todoList];

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
           <div className="todoList">

               <h1>To-Do-List</h1>

               <div className="inputs">

                  <input 
                  type="text" 
                  placeholder="Todo name"
                  value={inputName}
                  onChange={handleChangeName}
                  className="in"
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

               <div className="display-todo">
                  {todoList.map((todo, i)=>{
                    return(
                        <div className="todo-div" key={todo.id}>
                            <div>{todo.name}</div>
                            <div>{todo.date}</div>

                            <button 
                            className="delete-button"
                            onClick={()=>{removeList(i)}}
                            >
                                Delete
                            </button>

                            <div className="move-buttons">
                                <button 
                                className="m"
                                onClick={()=>{movetaskUp(i)}}
                                >
                                   👆
                                </button>

                                <button 
                                className="m"
                                onClick={()=>{moveTaskDown(i)}}
                                >
                                   👇
                                </button>
                            </div>
                        </div>
                    );
                  })}
               </div>
           </div>
        </>
    )
}

export default TodoList