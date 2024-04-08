



import { createSlice } from "@reduxjs/toolkit"

import axios from "axios"
import { setLoader } from "./isloader.slice"


export const productsSlice=createSlice({
    name:"products",
    initialState:[],
    reducers:{
        setProducts:(state, action)=>{
            return action.payload
        }
    }
})

export const getProductsThunk=()=>(dispatch)=>{
  
    dispatch(setLoader(true))

    axios
    .get("https://api-de-cruceros.onrender.com/api/v1/products")
    .then((resp)=>dispatch(setProducts(resp.data.Product)))
    .catch(error=>console.error(error))
    .finally(()=>dispatch(setLoader(false)))
}



     
export const {setProducts}=productsSlice.actions
export default productsSlice.reducer