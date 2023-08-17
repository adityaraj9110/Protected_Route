import {configureStore} from "@reduxjs/toolkit"
import { CustomReducer } from "./Reducer";

const store = configureStore({
    reducer:{
        custom:CustomReducer
    }
})

export default store;