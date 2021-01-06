import React, { useState } from "react";
import TodoItem from "./Components/TodoItem";

function App() {
  const [List, SetList] = useState()
  const [id, setId] = useState(0) ;
  const [todoItem, SettodoItem] = useState([]);

  let deleteTodo=(task_id)=>{
    const deletedList = todoItem.filter(item => item.Key != task_id) ;
    SettodoItem(deletedList) ;
  }

  const editTodo = (task_id, new_task) => {
    console.log(`This is task_id and new_task: ${task_id} and ${new_task}`) ;
    const finalList = todoItem.map(item => {
      if(task_id == item.Key){
        return {...item, Item : new_task} ;
      }
      return item ;
    }) ;

    console.log('finalList : ', finalList);
    SettodoItem(finalList) ;
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
           
            return(<TodoItem key={item.Key} title={item.Item} 
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
