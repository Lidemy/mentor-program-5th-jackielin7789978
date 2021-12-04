import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded: {
      reducer: (state, action) => {
        state.unshift(action.payload)
      },
      prepare: (id, taskname) => {
        return {
          payload: {
            id,
            taskname,
            isDone: false,
            isBeingEdited: false
          }
        }
      }
    },
    todoDeleted: (state, action) => {
      const { id } = action.payload
      return state.filter((todo) => todo.id !== id)
    },
    removeCompleted: (state) => {
      return state.filter((todo) => todo.isDone === false)
    },
    todoToggled: (state, action) => {
      const { id, isDone } = action.payload
      const targetTodo = state.find((todo) => todo.id === id)
      if (!targetTodo) return
      targetTodo.isDone = isDone
    },
    todoEdited: (state, action) => {
      const { id, taskname } = action.payload
      const targetTodo = state.find((todo) => todo.id === id)
      targetTodo.taskname = taskname
    }
  }
})

export const {
  todoAdded,
  todoDeleted,
  todoToggled,
  removeCompleted,
  todoEdited
} = todosSlice.actions

export default todosSlice.reducer
