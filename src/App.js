import React, { useState } from "react";
import TodoItem from "./Components/TodoItem";
import  "./App.css";
function App() {
  const [List, SetList] = useState()
  const [id, setId] = useState(0) ;
  const [todoItem, SettodoItem] = useState([
    { 
      title:null,
      key:"",
      comment:""
    }
  ]);

  let deleteTodo=(task_id)=>{
    // console.log('id:', task_id)
    let filterList= todoItem.filter(item=>{
      if(item.Key!=task_id){
        // console.log('taks id:',item.Key);
        return item;
      }
     

    })
    console.log('did',filterList);
    SettodoItem(filterList);


  }

  const editTodo=(task_id, new_Task)=>{
    console.log(`This is task_id and new_task: ${task_id} and ${new_Task}`) ;

      let filterList= todoItem.filter(item=>{
        if(item.Key== task_id){
            item.Item=new_Task;
            // // return{...item,Item:new_Task };
            // // console.log('-------------:',item);
        }
        return item;
      });
      console.log('outside:',filterList);
        SettodoItem(filterList);
      console.log('todolist:',todoItem);
     
  }


  const CommentEvent= (task_id,new_comment)=>{
    console.log(`this is id: ${task_id} and comment:${new_comment}`);
    let filterList =todoItem.filter(item=>{
      if(item.Key==task_id)
    {
      item.comment=new_comment;
      console.log('item:',item);
    }
    return item;        
  });
  SettodoItem(filterList);
  console.log('filter comment:',filterList);
  }


  return (

    <div className="App">

      <h1 class="heading" style={{padding:"12px"}}>TODO-LIST With React</h1>

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
          
            todoItem.slice().reverse().map(item => {
              // return <TodoItem title={todoIte}/>
  
              return(<TodoItem title={item.Item}
                     id={item.Key}
                     Comment={item.comment}
                     delEvent={deleteTodo}
                    editTodo={editTodo}
                    CommentEvent={CommentEvent}
                />)
            })    
          
        }

      </div>

    </div>
  );
}

export default App;
