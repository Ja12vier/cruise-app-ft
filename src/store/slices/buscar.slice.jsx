

import { createSlice } from "@reduxjs/toolkit";

export const buscarSlice=createSlice({

    name:"buscar",
    initialState:[],
    reducers:{
        setBuscar:(state, action)=>{
            return action.payload
        }
    }

})

export const {setBuscar}=buscarSlice.actions
export default buscarSlice.reducer