

import { useDispatch, useSelector } from "react-redux"
import {useForm} from 'react-hook-form'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { setPropiedad } from "../store/slice/offCanbas.slice";
import { useState, useEffect } from 'react';
import CartdOffcanvas from "./CartdOffcanvas";
import { getCartdproducThunk } from "../store/slice/cartd.slice";




const   OffcanvaFilter=({show, handleClose, setShow, buscarComponet })=>{

    const dispatch=useDispatch()
    const busqueda=useSelector((state)=>state.Busqueda) 
    const [name, setname]=useState("")
    const {register, handleSubmit}=useForm()
  
    const getforData=(data)=>{

       const name=data.name[0]
       setname(name)
        
    }
     
    useEffect(()=>{

       dispatch(setPropiedad(name))
       dispatch(getCartdproducThunk())
      setShow(false)
    },[name])
 
   
    return(
<>
      

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          
        </Offcanvas.Header>
        <Offcanvas.Body>

          
{buscarComponet && <form onSubmit={handleSubmit(getforData)} className="constine Canva">
  <Offcanvas.Title>!Marque una opcion¡</Offcanvas.Title>
            {
            busqueda.map((buscarItem, index)=>(
            <div key={index} className="buscarCanva">

                <div className="container-canva">
                <input type="checkbox"
                  id="name"
                  value={buscarItem}
              
                {...register("name")}
                />
            <label htmlFor="name">
            {buscarItem}  
            </label>
              </div>
         </div>
              ))}
      <button type='submit'>ver crucero</button>
      </form>
        }  
           
         
         {!buscarComponet && <article>
                   <CartdOffcanvas/>
                
         </article>
         }
         
        </Offcanvas.Body>
      </Offcanvas>
    </>

    )
}

export default  OffcanvaFilter