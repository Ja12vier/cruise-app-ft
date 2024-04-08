import { createSlice } from "@reduxjs/toolkit";

export const alertSlice=createSlice({
    name:"alertSlice",
    initialState:false,
    reducers:{
        setAlertSlice:(state, action)=>{
            return action.payload
        }
    }
})


export const{setAlertSlice}=alertSlice.actions
export default alertSlice.reducer