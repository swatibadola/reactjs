import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid generates unique ids'

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload      //payload is an object
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        }
    }           // Reducers include properties and functions
})

export const {addTodo, removeTodo} = todoSlice.actions   // Will be helpful in components

export default todoSlice.reducer