
import { createSlice } from "@reduxjs/toolkit";

export const isLoaderSlice=createSlice({
    name:"Loader",
    initialState: true,
    reducers:{
        setLoader:(state, action)=>{
            return action.payload
        }
    }
})


export const {setLoader} = isLoaderSlice.actions;
export default isLoaderSlice.reducer;