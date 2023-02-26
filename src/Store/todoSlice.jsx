import { createSlice } from "@reduxjs/toolkit";


const initalTask=[
  {
    id: 1,
    title: "Reading",
    priority: "High",
    description: "Read an article about blockchain",
    start: "2023-02-23",
    end: "2023-02-28",
    status: "Todo",
  },
  
  { id:2,
    title: "Sleep",
    priority: "Low",
    description: "Sleep a while",
    start: "2023-02-23",
    end: "2023-02-28",
    status: "Doing",
  },
  {
    id: 3,
    title: "Code",
    priority: "High",
    description: "Create Todo App",
    start: "2023-02-23",
    end: "2023-02-28",
    status: "Done",
  },
]
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: initalTask
  },
  reducers: {
    add: (state, action) => {
      state.tasks.push(action.payload);
    },
    edit: (state, action) => {
      const task = state.tasks.filter((v) => v.id !== action.payload.id);
      task.push(action.payload);
      state.tasks = task;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, edit } = todoSlice.actions;

export default todoSlice.reducer;
