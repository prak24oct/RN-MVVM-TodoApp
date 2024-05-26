import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-native-uuid'

const initialState = {
  isFetchingTodo: false,
  todos: [
    {
      id: 1,
      title: "I have to do something", 
    },
    {
      id: 2,
      title: "I have to go for shoping",
    },
  ],
};


export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state,action) => {
        state.todos = state.todos.concat([{title: action.payload.title, id: uuid.v4()}])
    },
    updateTodo: (state,action) => {
      const {id, title} = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if(todo){
        todo.title = title;
      }
       
    },
    deleteTodo: (state, action) => {
      const {id} = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
  },
});

const { createTodo, updateTodo, deleteTodo } = todoSlice.actions;

export const TodoAction = {
  createTodo,
  updateTodo,
  deleteTodo,
};

export default todoSlice.reducer;
