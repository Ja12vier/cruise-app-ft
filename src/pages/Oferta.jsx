
import { useSelector, useDispatch } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OfertaImg from '../img/ofertas-cruceros.avif'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from "react";
import { getProductsThunk } from "../store/slices/products.slice";
import { useNavigate } from "react-router-dom";

const Oferta=()=>{
     const navigate=useNavigate()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getProductsThunk())
    },[])

const product=useSelector(state=>state.Products)

const prodoucto= [...product].sort((a, b)=>a.price  - b.price)


    return (
        <section className="section oferta">
            <div className="oferta">
               
               <div className="img">
                <img src={OfertaImg} alt="oferta" />
               </div>

               <div className="oferta-title">

                <h2>Ofertas</h2>
                <p>Encuentra las mejores ofertas de cruceros en CrucerosJVplus.com</p>
                <p>Te seleccionamos los mejores precios que se adaptan a las comodidas de tu bolsillo.</p>
                <p>¡Encuentra aquí tus vacaciones en crucero!</p>
               </div>
           <hr />

            <Row className="row">
            <h3>Precio por oden ascendente </h3>
           
             {
                prodoucto.map((productItem)=>(
                 
                     
                <Col key={productItem.id}  className="col ">
                       <Card className="oferta-card">
                           <Card.Img variant="top" style={{ width: '100%' }} src={productItem.productimgs[0].url} />
                           <Card.Body>
                           <Card.Title><h5>{productItem.title}</h5></Card.Title>
               
                           <Card.Text>
                              <span className="estadia">Tiempo de estadia: </span> {productItem.stay}
                           </Card.Text>
                             <div className="cupo-disponible">
                                
                                <span className="estadia" >Cupo disponible:</span><span> {productItem.quantity}</span>
                             </div>
                           <div className="card-butto">
                                <span>Desde: $<span className="price"> {productItem.price}</span> </span>
                            <Button variant="primary" style={{borderRadius:"20px", height:"50px", }} className="button" onClick={()=>navigate(`/product/${productItem.id}`)}>Ver Crucero</Button>   
                             
                           </div>
                           
                           </Card.Body>
                   </Card> 
                     
                    </Col>
                    
                    
                ))
         
             }
             
             </Row>
    
 <hr />
                </div>
              
               <div className="oferta-footer">
                  <div>El portal Nº1 en reservas de cruceros desde 1994</div>

                  <div><p>CrucerosJvplus.com - Agencia de viajes online con número de autorización GC 001818</p>
                  <p>Marca registrada de Aethalia Viajes y Cruceros S.L. C.I.F. B60418605</p>
                  </div>
                  
                  <div><p>© 2024 CrucerosJvplus.com</p>
                  <p>Reservados todos los derechos.</p>
                  </div>
               </div>
        </section>
       
    )
}

export default Oferta