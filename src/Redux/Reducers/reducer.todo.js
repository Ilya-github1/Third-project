import { createSlice } from "@reduxjs/toolkit";
const Todos = createSlice({
  name: 'Todos',
  initialState: {
    todoArray: [],
    Status: true,

  },
  reducers: {
    todoPush: (state, actions) => {
      state.todoArray = [...state.todoArray, actions.payload]
    },

    deleteTask: (state, actions) => {
      state.todoArray = state.todoArray.filter((el) =>
       { return actions.payload !== el.id })

    },

    TodoActive: (state, actions) => {
      state.todoArray = state.todoArray.map(el => {
        if (actions.payload === el.id) {
          return {
            ...el,
            is_active: !el.is_active,

          }

        }

        return el

      })
    },
    

  }
})
export default Todos.reducer
export const { todoPush, deleteTask, 
  TodoActive,
   todoList, } = Todos.actions