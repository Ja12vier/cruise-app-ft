import { useSelector, useDispatch} from "react-redux";
import axios from "axios";
import { deleteCartdproducThunk } from "../store/slices/cartd.slice";
import { setLoader } from "../store/slices/isloader.slice";
import getConfig from "../utils/getConfig";
import { setCartd } from "../store/slices/cartd.slice";
import { useEffect, useState } from "react";
import { getCartdproducThunk } from "../store/slices/cartd.slice";

const CartdOffcanvas=()=>{

    const cartd=useSelector(state=>state.cartd)
    const dispatch=useDispatch()
    const [quantity, setQuantity]=useState(0)
    const [identificadorId, setIdentificadorId]=useState(0)
    const [visible, setVisible]=useState(false)

    console.log(cartd)
   let cantidadViaje=cartd.length

    let price=0

   const userFilter=cartd.filter((usuario)=>usuario.id==identificadorId)
   console.log(userFilter[0]?.product?.quantity);
    const handleEdit=(id)=>{ 
   
       setVisible(true)
       const editarCard=document.querySelector(".form-editar-container")
       
        setIdentificadorId(id)

       if(visible){

        editarCard.classList.add("form-editar")
       }else{
        editarCard.classList.remove("form-editar")
       }
      
      
     
    }

    
    const handleDelete=(id)=>{
      
      dispatch(deleteCartdproducThunk(id))
    }

      
     
    for(let i=0; i < cartd.length; i++){
      let totalPrice= cartd[i].product.price
      price += Number(totalPrice)
    }
    
    const handlePurchase=()=>{
      dispatch(setLoader(true))
      axios
      .post(`https://api-de-cruceros.onrender.com/api/v1/purchases`,{

        "title": "Ensenada Cruise",
                "descryption": "Florida, Tasas Portuarias Incluidas, Actividades Insólitas a bordo",
                "quantity": 3,
                "price": "2910",
                "stay": "2 días / 4 noches",
                "categoryId": 3,
                "userId": 1,
                "status": true,
      }, getConfig())
      .then(()=>dispatch(setCartd([])))
      .catch((error)=>{console.error(error)})
      .finally(()=>dispatch(setLoader(false)))
       

    }

    const handleEditarQuantity=(e)=>{
     e.preventDefault()
 
     let hacederQuantity=document.getElementById("quantity").value;
     const errorName=document.getElementById("errorName");
        

       
    if(hacederQuantity<=0){
      errorName.textContent="!Por favor ponga la cantidad de huespede¡ antes de guardar los cambios."
      return false
    }else if(hacederQuantity > userFilter[0]?.product?.quantity){
      errorName.textContent=`¡Solo quedan ${userFilter[0]?.product?.quantity} cupos disponible! Excedio la cantidad de huespede.`
      return false
    }
    errorName.textContent=""

        
 

       
    const data={
      quantity:Number(quantity)
    }

    dispatch(setLoader(true))
    axios
    .put(`https://api-de-cruceros.onrender.com/api/v1/productsincarts/${identificadorId}`,data, getConfig())
    .then(()=>dispatch(getCartdproducThunk()))
    .catch((error)=>{console.error(error)})
    .finally(()=>{
      dispatch(setLoader(false))
      setVisible(false)
    })

 
    }
useEffect(()=>{

  dispatch(getCartdproducThunk())

}, [identificadorId])
 

    return(<article>

          <div className="viaje-carrito">
          <h2><span className="cantidadViaje">{cantidadViaje}</span>Viajes en el carrito</h2>


                 <form onSubmit={(e)=>handleEditarQuantity(e)} className={`form-editar-container ${visible ? "form-editar" :""}`}>
                  <div className="editar-container">

                    <div className="editar-input">
                    <label htmlFor="quantity">Huespede</label>
                    <input type="number" 
                     id="quantity"
                      onChange={(e)=>setQuantity(e.target?.value)}
                     placeholder="0"
                   
                     
                    />
                    </div>
                    <div className="button">
                      <button type={"submit" }>Guardar</button>
                    </div>
                 
                  </div>
                  <span id="errorName" className="errorName"></span>
                 </form>
            {
                  cartd.map(cardItem=>(
                    <li className="cartd-offCanva">
                    <div className="contaner-offCanva">
                        <div className="title"><span>Lugar:</span> {cardItem.product.title}</div>
                        <div className="quatity"><span>Huespede:</span> {cardItem.quantity}</div>
                        <div className="stay"><span>Tiempo: </span>{cardItem.product.stay}</div>
                        <div className="price"><span>US$:</span> {cardItem.product.price}</div>
                    </div>
                      <div className="button">
                         <button onClick={()=>handleEdit(cardItem.id)}>Editar</button>
                         <button onClick={()=>handleDelete(cardItem.id)}>Eliminar</button>
                      </div>
                      
                    </li>
                  ))

                  
                } 
      
             <div className="totalPrice"><div className="price-compra">Total Compra:<span> {price}</span></div></div>

        <div className="button-reserva"> <button onClick={handlePurchase} className="button-reserva">Completar-Reserva</button></div>
            
          </div>
       
    </article>

      )
}

export default CartdOffcanvas