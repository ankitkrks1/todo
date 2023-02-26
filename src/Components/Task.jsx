import React,{useState} from "react";
import EditForm from "./EditForm";
const Task = ({ task }) => {
    const [show,setSow] = useState(false)
    const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="task">
      <h2>{task.title}</h2>
      <button onClick={()=>setSow(!show)}>Show</button>
      {show && <div id="modal">
        <div className="modal-content">
          <h3>Priority: {task.priority}</h3>
          <h4>{task.description}</h4>
          <p>Start {task.start}</p>
          <p>End {task.end}</p>
          <h2>Status : {task.status}</h2>
          <button onClick={()=>setSow(!show)}>Hide</button>
          <button onClick={()=>setIsEdit(!isEdit)}>Edit</button>
          { isEdit && <EditForm action='Edit' close={setIsEdit} t={task}/> }
        </div>
      </div>}
    </div>
  );
};

export default Task;
