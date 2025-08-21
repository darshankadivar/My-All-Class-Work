import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  Data: JSON.parse(localStorage.getItem("ReduxTodo")) || [],
};

export const TodoSlice = createSlice({
    name : "TodoSlice",
    initialState,
    reducers : {
        addData : (state, action) => {
            state.Data.push(action.payload)
               localStorage.setItem("ReduxTodo", JSON.stringify(state.Data));
        },
        deleteData : (state, action) => {
            let newData = state.Data.filter((item) => item.id != action.payload)
            state.Data= newData
           localStorage.setItem("ReduxTodo", JSON.stringify(state.Data));
        },
        updateData : (state, action) => {
            state.Data.map((e,i) => {
                if(e.id === action.payload.id && action.payload.formData) {
                    e.name = action.payload.formData.name || e.name
                    e.subject = action.payload.formData.subject || e.subject
                    localStorage.setItem("ReduxTodo", JSON.stringify(state.Data));
                } else{
                    e
                }
            })
        },
    }
})

export const {addData, deleteData, updateData} = TodoSlice.actions
export default TodoSlice.reducer