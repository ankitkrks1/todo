import React, { useState } from "react";
import Task from "./Task";
import { add, edit } from "../Store/todoSlice";
import { useSelector, useDispatch } from "react-redux";

import AddForm from "./AddForm";

const Tasks = ({ name }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleDrop = (e) => {
    let task = tasks.find(
      (v) => v.id === parseInt(e.dataTransfer.getData("id"))
    );

    let t = {
      ...task,
      status: name,
    };
    dispatch(edit(t));
  };
  return (
    <div
      className="container"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e)}
    >
      <h1>{name}</h1>

      {tasks.map((v) => {
        if (v.status === name) {
          return (
            <div key={v.id}>
              <Task task={v} />
            </div>
          );
        }
      })}
      <button className="btn" onClick={() => setIsAdd(!isAdd)}>
        + Add Card
      </button>

      {isAdd && <AddForm action="Add" close={setIsAdd} />}
    </div>
  );
};

export default Tasks;
