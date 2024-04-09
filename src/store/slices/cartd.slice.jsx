

import { createSlice } from "@reduxjs/toolkit";
import { setLoader } from "./isloader.slice";
import getConfig from "../../utils/getConfig";
import axios from "axios";


export const cartdSlice=createSlice({
    name:"cartd",
    initialState:[],
    reducers:{
        setCartd:(state, action )=>{
            return action.payload
        }
    }

})




export const getCartdproducThunk=()=>(dispatch)=>{
    dispatch(setLoader(true))
    axios
    .get(`https://api-de-cruceros.onrender.com/api/v1/productsincarts`, getConfig())
    .then((resp)=>{dispatch(setCartd(resp.data.Productsincart)), console.log(resp.data.Productsincart)})
    .catch((error)=>console.error(error))
    .finally(()=>dispatch(setLoader(false)))
}

export const postCartdproducThunk=(data)=>(dispatch)=>{
  
    dispatch(setLoader(true))

    axios
    .post(`https://api-de-cruceros.onrender.com/api/v1/productsincarts`,data, getConfig())
    .then(()=>{dispatch(getCartdproducThunk())})
    .catch((error)=>console.error(error))
    .finally(()=>dispatch(setLoader(false)))
}

export const deleteCartdproducThunk=(id)=>(dispatch)=>{

    
     dispatch(setLoader(true))
    axios
    .delete(`https://api-de-cruceros.onrender.com/api/v1/productsincarts/${id}`, getConfig())
    .then(()=>{
        dispatch(getCartdproducThunk())
     })
    .catch((error)=>{console.error(error)
    })
    .finally(()=>dispatch(setLoader(false)))


}


export const {setCartd}=cartdSlice.actions
export default cartdSlice.reducer