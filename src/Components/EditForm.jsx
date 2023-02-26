import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { add, edit } from "../Store/todoSlice";

const EditForm = ({ action, close, t }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [task, setTask] = useState(t);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setTask((oldTask) => ({
      ...oldTask,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEdit = () => {
    dispatch(edit(task));
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
          type="date"
          name="end"
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
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => close(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
