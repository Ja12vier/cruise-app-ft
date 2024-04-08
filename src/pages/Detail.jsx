

import {useParams} from "react-router-dom"
import axios from "axios"
import {useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setLoader } from "../store/slice/isloader.slice";
import { FaCartPlus } from "react-icons/fa";
import getConfig from "../utils/getConfig";
import { postCartdproducThunk, getCartdproducThunk } from "../store/slice/cartd.slice";
import AlertShow from "../components/AlertShow";
import AlertSlice from "../components/AlertSlice";
import { setAlertSlice } from "../store/slice/alert.slice";


const Detail=()=>{

  const dispatch=useDispatch()
  const cartd=useSelector(state=>state.cartd)
const {id}=useParams()
const [product, setProduct]=useState({})
const [exiteCartd, setexiteCartd]=useState([])
const [quantity, setQuantity]=useState()

const [detailAlert, setDetailAlert] = useState(false);
const [alertshow, setAlertShow] = useState(false);
const alertHandleClose = () => setAlertShow(false);
const alertHandleShow = () => setAlertShow(true);

  useEffect(()=>{

    dispatch(setLoader(true))
    axios
    .get(`https://api-de-cruceros.onrender.com/api/v1/products/${id}`)
    .then((resp)=>{setProduct(resp.data)})
    .catch((error)=>console.error(error))
    .finally(()=>dispatch(setLoader(false)))

    dispatch(setLoader(true))
    axios
    .get(`https://api-de-cruceros.onrender.com/api/v1/carts`)
    .then((resp)=>{setexiteCartd(resp.data) , console.log(resp.data)})
    .catch((error)=>console.error(error))
    .finally(()=>dispatch(setLoader(false)))

   

    },[id])


    
  
    const handleteInputChange=(e)=>{
        
      const inputNumero=e.target.value

      if(!isNaN(inputNumero) && inputNumero >= 0){
      setQuantity(inputNumero)
      }

      
   }
   const handleAgregarDetail=()=>{
    
    const token=localStorage.getItem("token")
    const errorName=document.getElementById("errorName")

  console.log(errorName);
    const data={
      productId:Number(id),
      quantity:Number(quantity)
    }


    const acederCard=cartd.map((producto)=>{
          return producto.productId
    }
    )


    const existeCart=acederCard.includes(data.productId)

  if(!token){
      return (
        alertHandleShow(),
        setDetailAlert(true)
       
        )
        
     }else if(existeCart){
      errorName.textContent=""
    dispatch(setAlertSlice(true))
   
  return false
  }else if(data.quantity > product.Product.quantity){
     errorName.textContent=`¡Solo quedan ${product.Product.quantity}  cupos disponible! Excedio la cantidad de huespede.`
    return false

  }else if(exiteCartd != 0){
    errorName.textContent=""
      return ( axios
       .post(`https://api-de-cruceros.onrender.com/api/v1/productsincarts`,data, getConfig())
       .then(()=>{dispatch(getCartdproducThunk())})
       .finally(()=>{ 
        dispatch(postCartdproducThunk(data)),
        dispatch(setLoader(false))
        errorName.textContent="agrego un viaje al carrito"})
       
       )

      
     }
      
     dispatch(setLoader(true))
     axios
     .post(`https://api-de-cruceros.onrender.com/api/v1/carts`,data, getConfig())
     .then(()=>dispatch(getCartdproducThunk()))
     .catch((error)=>console.error(error))
     .finally(()=>dispatch(setLoader(false)))
   
 
   }
   
    return(
        <div className="container-detail">
     
            
            <div className="detail-section">

                  <div className="img">
                  <img src={product?.Product?.productimgs[0].url} alt="imagenCrucero" />
                  </div>

                  <div className="detail-descripcion">
                  <h2>{product?.Product?.title}</h2>
                  <span className="span">{product?.Product?.stay}</span>
                  
                  <div className="beneficios">
                    <h3>Beneficios y descripcion</h3>
                 <p>{product?.Product?.descryption}</p>
                  <h4>Interior</h4>
                  <span>{product?.Product?.category.name}</span>
                  <h4>Cupos</h4>
                  <span>{product?.Product?.quantity} disponible</span>
                  </div>
                   
                  <div className="container-price">
                 
                     <div className="input-quantity">
                      <span>Numero de huespedes</span>
                     <input type="number"
                      onChange={handleteInputChange}
                      value={quantity}
                      placeholder="0"
                     />
                     </div>
                     
                    <div className="detail-price butto">
                      <h5>desde</h5>
                     <p>{product?.Product?.price}</p>

                      <button onClick={handleAgregarDetail}><FaCartPlus /> Reservar-Ahora</button>
                    </div>
                  </div>
              </div>
         <span id="errorName" className="errorName"></span>

            </div>
          <hr />  
          <AlertSlice/>
          <AlertShow
            alertshow={alertshow}
            setAlertShow={setAlertShow}
            alertHandleClose={alertHandleClose}
            detailAlert={detailAlert}
            />
        <hr />
        <div className="oferta-footer">
                  <div>El portal Nº1 en reservas de cruceros desde 1994</div>
                  <div><p>CrucerosJvplus.com - Agencia de viajes online con número de autorización GC 001818</p>
                  <p>Marca registrada de Aethalia Viajes y Cruceros S.L. C.I.F. B60418605</p>
                  </div>
                  <div><p>© 2024 CrucerosJvplus.com</p>
                  <p>Reservados todos los derechos.</p>
                  </div>
               </div>

        </div>
    )
}

export default Detail 

