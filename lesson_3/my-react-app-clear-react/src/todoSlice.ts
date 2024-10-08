import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITask {
  id: number;
  text: string;
}

const initialState: ITask[] = [];

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({id: Date.now(), text: action.payload})
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;