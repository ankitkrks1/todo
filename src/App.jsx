import { useState } from "react";

import "./App.css";
import Tasks from "./Components/Tasks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div className="grid-container">
        <Tasks name="Todo" />
        <Tasks name="Doing" />
        <Tasks name="Done" />
      </div>
    </div>
  );
}

export default App;
