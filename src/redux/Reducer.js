import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    login:false
}

export const CustomReducer = createReducer(initialState,{
    auth: (state)=>{
        state.login = !state.login;
    }
    
})
