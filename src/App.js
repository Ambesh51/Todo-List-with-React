import React, { useState } from "react";
import TodoItem from "./Components/TodoItem";

function App() {
  const [List, SetList] = useState()
  const [id, setId] = useState(0) ;
  const [todoItem, SettodoItem] = useState([]);

  let deleteTodo=()=>{
    // e.preventDefault();
    // console.log(index);
    console.log('clicked') ;

  }

  const editTodo = (task_id, new_task) => {
    console.log(`This is task_id and new_task: ${task_id} and ${new_task}`) ;
    for(var item of todoItem){
      if(item.Key == task_id){
        // console.log("this is item : ", item) ;
        item.Item = new_task ;
        console.log('todolist:',todoItem) ;
        SettodoItem(todoItem)
        // SettodoItem([...todoItem, {...item, Item : new_task}]) ;
        return ;
      }
      console.log("Task not found") ;
    }
  }

  


  return (

    <div className="App">

      <h1>ToDOLIST</h1>

      <input onChange={(e) => {
        console.log(e.target.value);
        SetList(e.target.value);
      }} placeholder="What you are Guessing"
        value={List} />

      <button onClick={(e) => {
        e.preventDefault();
        todoItem.push({Item:List, Key:id })
        setId(id+1);
        // console.log('todoitem : ', todoItem);
        SettodoItem(todoItem) ;
        SetList("")
      }}>Submit</button>


      <div>
        {
          todoItem.map(item => {
            // return <TodoItem title={todoIte}/>
           
            return(<TodoItem title={item.Item} 
                   id={item.Key} 
                   delEvent={deleteTodo}
                  editTodo={editTodo}
              />)
          })
        }

      </div>

    </div>
  );
}

export default App;
