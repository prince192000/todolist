import React from "react";
import './Todolist.css';

const Todoitem = (props) => {


     return(
        <>
        <div className="todo_items "> <i className="fa-solid fa-circle-xmark" aria-hidden='true'  onClick={()=> {
            props.onSelect(props.id);
        }}></i>
      <li>  {props.text}</li>
      </div>
      </>
      )
};

export default Todoitem;