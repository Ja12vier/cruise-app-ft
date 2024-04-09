
import { createSlice } from "@reduxjs/toolkit"

import axios from "axios"
import { setLoader } from "./isloader.slice"


export const categoriesSlice=createSlice({
    name:"categorie",
    initialState:[],
    reducers:{
        setCategorie:(state, action)=>{
            return action.payload
        }
    }
})

export const getCategoriesThunk=()=>(dispatch)=>{
  
    dispatch(setLoader(true))

    axios
    .get("https://api-de-cruceros.onrender.com/api/v1/categories")
    .then((resp)=>dispatch(setCategorie(resp.data.Categories)))
    .catch(error=>console.error(error))
    .finally(()=>dispatch(setLoader(false)))
}

export const {setCategorie}=categoriesSlice.actions
export default categoriesSlice.reducer