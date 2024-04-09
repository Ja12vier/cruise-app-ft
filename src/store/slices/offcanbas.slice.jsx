


import { createSlice } from "@reduxjs/toolkit"




export const offCanbasSlice=createSlice({
    name:"name",
    initialState:"",
    reducers:{
        setPropiedad:(state, action)=>{
            return action.payload
        }
    }
})

export const {setPropiedad}=offCanbasSlice.actions
export default offCanbasSlice.reducer