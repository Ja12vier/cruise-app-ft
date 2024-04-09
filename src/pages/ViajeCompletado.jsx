import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Card from 'react-bootstrap/Card';
import { getViajeCompletadoThunk, deleteViajeCompletadoThunk } from "../store/slices/viajecompletado.slice"
import { getCartdproducThunk } from "../store/slices/cartd.slice"


const ViajeCompletado=()=>{
     
    const dispatch=useDispatch()
    const reservaCompletada=useSelector((state)=>state.ReservaCompletada)
    
    useEffect(()=>{
     
        dispatch(getViajeCompletadoThunk())
        dispatch(getCartdproducThunk())
 },[])
   
    console.log(reservaCompletada);

    const handleDelete=(id)=>{
     dispatch(deleteViajeCompletadoThunk(id))
   console.log(id);
    }
    
    return(
        <div className="container-viaje-completado">

           <div className="container-purchase">
                
                <ul>
                    {
                    reservaCompletada.map((cartdItem)=>(
                        <li className="purchase-viaje" key={cartdItem.id}>
                        <Card style={{ width: '18rem' , height:"22rem"}} className="cartd-purchase" >
                            <Card.Body>
                                <Card.Title>{cartdItem.product.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{cartdItem.product.stay}</Card.Subtitle>
                                <Card.Text>
                                {cartdItem.product.descryption}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">{cartdItem.product.quantity} huespede</Card.Subtitle>
                         
                               
                            </Card.Body>
                            <div className="button"><button  style={{borderRadius:"5px"}} onClick={()=>handleDelete(cartdItem.id)}>Eliminar</button></div>
                            </Card>
                        </li>
                    ))
                }
                </ul>
           
           </div>
           
        </div>
    )
}

export default ViajeCompletado