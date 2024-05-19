import React, { useEffect, useState } from "react";
import "../App.css";
import { MdDelete } from 'react-icons/md';


const Todolist = ({addTodoList,setAddTodoList,arr,setArr}) => {

  const handleAdd = () => {
    if (addTodoList) {
      setAddTodoList("");
      let newObject = {id:arr.length, list:addTodoList}
      const newArr = [...arr, newObject];
      setArr(newArr);
    }
  };

  const handleDelete =(id)=>{
      console.log('delete',id);
      let filtereddata=arr.filter((data)=> data.id !== id)
      setArr(filtereddata)
    }

  return (
    <>
    <h2>To Do List</h2>
    <div className="todolistContainer">
      <div className="inputContainer">
        <input type="text" onChange={(e) => setAddTodoList(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      {arr.map((todolist) => {
        return (
          <div className="todolistCard">
            <h3>{todolist.list}</h3>
            <MdDelete onClick={()=>handleDelete(todolist.id)}/>
          </div>
        );
      })}
    </div>

    </>
  );
};

export default Todolist;
