import React, { useState } from "react";
import EditItem from "./TodoEdit";


const TodoItem = (props) => {
    const [editedTask, setEditedTask] = useState(props.title) ;
    const [editable, setEditable] = useState(false);
    // const [EditId, SetEditId]=useState([props.id]);

    // const EditContent=()=>{
    //     SetEditId(props.id)
    //     console.log(EditId)
    // }

    console.log(props.editTodo) ;

    return (
        <>
            {
                editable ?
                    <div>
                        <input placeholder="task" onChange={(e) => {
                            setEditedTask(e.target.value) ;
                        }} defaultValue={props.title} />
                    </div> :
                    <h1>{props.title}</h1>
            }



            {
                editable ?
                    <button onClick={() => {
                        props.editTodo(props.id, editedTask) ;
                        setEditable(false);
                    }}>Done</button> :
                    <button onClick={() => {
                        setEditable(true);
                    }}>Edit</button>
            }




            <button onClick={props.delEvent}>Delete</button>

            <p>{props.id}</p>

        </>
    )
}

export default TodoItem;






// 
// {
//   EditId.map(item => {
//     // return <TodoItem title={todoIte}/>
//    console.log('itemmmm:..',item)
//     return(<p>{item}</p>)
//   })
// }