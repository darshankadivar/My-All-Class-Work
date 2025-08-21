 import { configureStore } from "@reduxjs/toolkit";
import  TodoSlice  from "../Fetucher/TodoSlice";

export const store = configureStore({
    reducer : {
        todokey :TodoSlice
    }
})