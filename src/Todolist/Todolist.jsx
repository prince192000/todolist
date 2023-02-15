import React, { useState } from "react";
import "./Todolist.css";
import Todoitem from "./Todoitem";

export const Todolist = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="todolist-container">
        <h1>TO DO LIST </h1>
        <div className="input-container">
          <input type="text" placeholder="Add Items" onChange={itemEvent} />
          <button onClick={listOfItem}> +</button>

          <ol>
         
           
            {Items.map((itemval, index) => {
              return <Todoitem  key={index} id={index} text={itemval}  onSelect={deleteItems}/>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Todolist;
