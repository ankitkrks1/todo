import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { add, edit } from "../Store/todoSlice";


const AddForm = ({ action, close }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    id: tasks.length + 1,
    title: "",
    priority: "",
    description: "",
    start: "",
    end: "",
    status: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setTask((oldTask) => ({
      ...oldTask,
      [e.target.name]: e.target.value,
    }));
  };
  const handleAdd = () => {
    dispatch(add(task));
    close(false);
  };
  return (
    <div id="modal">
      <div className="modal-content">
        <h2>{action}</h2>
        <input
          placeholder="Title"
          value={task.title}
          name="title"
          onChange={handleChange}
        ></input>
        <input
          placeholder="Priority"
          value={task.priority}
          name="priority"
          onChange={handleChange}
        ></input>
        <input
          placeholder="Description"
          value={task.description}
          name="description"
          onChange={handleChange}
        ></input>
        <label>Start</label>
        <input
          placeholder="Start"
          value={task.start}
          name="start"
          type="date"
          onChange={handleChange}
        ></input>
        <label>End</label>
        <input
          placeholder="End"
          value={task.end}
          name="end"
          type="date"
          onChange={handleChange}
        ></input>
        <label>Status :</label>
        <select onChange={handleChange} name="status">
          <option value="None">Select an option</option>
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <div>
          <button onClick={handleAdd}>Add</button>
          <button onClick={() => close(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
