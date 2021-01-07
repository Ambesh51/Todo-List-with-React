import React, { useState } from "react";
import  "./TodoItem.css";



const TodoItem = (props) => {
    
    
    const [editedTask, setEditedTask] = useState(props.title) ;
    const [editable, setEditable] = useState(false);
    const [comment, Setcomment] = useState(false);
    const [EditComment, SetEditComment ]= useState();
    
    // const [Comment, SetComment] = useState(false);
    // const [EditId, SetEditId]=useState([props.id]);

    // const EditContent=()=>{
    //     SetEditId(props.id)
    //     console.log(EditId)
    // }
    

    // console.log(props.editTodo) ;
    // if(!props.title){
    //     return <p className="Subheading"><hr/>Here the list of elements<hr/></p>
    // }
    // else{
   

    return (
        <div className="container">
     
                    <p className="id"> No.{props.id +1}</p>
       {
                editable ?
                    <div className="editTitleInput">
                        <input placeholder="task" onChange={(e) => {
                            setEditedTask(e.target.value) ;
                        }} defaultValue={props.title} />
                    </div> :
                    <h1 className="title">{props.title}</h1>
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


                 <button onClick={() => {props.delEvent(props.id)}}>Delete</button>
     
    
      { comment ?
                     <div className="Comment-Input">
                         <input placeholder="Comment" onChange={(e) => {
                              SetEditComment(e.target.value)}} 
                          defaultValue={EditComment}/>
                          <h1 style={{margin:"0px"}}>{EditComment}</h1>
                     </div>
          : <button onClick={() => Setcomment(true)}>Comment</button>
        
      }
      { comment ?
            <button onClick={() =>{
                    props.CommentEvent(props.id,EditComment);
                     Setcomment(false)}}
                  >Update Comment</button>
          :
          <div><br/>
            <h1>{props.CommentEvent}</h1>
        </div>
      }

    <p className="comment">{props.Comment}</p>
        
  

        </div>
    )
}
// }

export default TodoItem;






// 
// {
//   EditId.map(item => {
//     // return <TodoItem title={todoIte}/>
//    console.log('itemmmm:..',item)
//     return(<p>{item}</p>)
//   })
// }