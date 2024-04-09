
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoader } from "./isloader.slice";
import getConfig from "../../utils/getConfig";

const viajeCompletado=createSlice({
    name:"reservasCompletada",
    initialState:[],
    reducers:{
        setReservaCompletada:(state, action)=>{
            return action.payload
        }
    }
    
})

export const  getViajeCompletadoThunk=()=>(dispatch)=>{


    dispatch(setLoader(true))
    axios
    .get("https://api-de-cruceros.onrender.com/api/v1/purchases", getConfig())
    .then((resp)=>dispatch(setReservaCompletada(resp.data.Purchases)))
    .catch((error)=>console.error(error))
    .finally(()=>dispatch(setLoader(false)))
}

export const  deleteViajeCompletadoThunk=(id)=>(dispatch)=>{
    axios
    .delete(`https://api-de-cruceros.onrender.com/api/v1/purchases/${id}`, getConfig())
    .then(()=>dispatch(getViajeCompletadoThunk()))
    .catch((error)=>console.error(error))
    .finally(()=>dispatch(setLoader(false)))
}
export const {setReservaCompletada}=viajeCompletado.actions
export default viajeCompletado.reducer