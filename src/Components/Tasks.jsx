import React, { useState } from "react";
import Task from "./Task";

import { useSelector, useDispatch } from "react-redux";

import AddForm from "./AddForm";


const Tasks = ({ name }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  

  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="container">
      <h1>{name}</h1>
     
      {tasks.map((v) => {
        if (v.status === name) {
          return <div key={v.id} >
          <Task task={v} />
          
          
          </div>;
        }
      })}
    <button className="btn" onClick={()=>setIsAdd(!isAdd)}>+ Add Card</button>
    
    { isAdd && <AddForm action='Add' close={setIsAdd}/> }
   
    </div>
  );
};

export default Tasks;
