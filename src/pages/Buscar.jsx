import OffcanvaFilter from "../components/OffcanvaFilter"
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux"
import { setBuscar } from "../store/slices/buscar.slice";
import { setLoader } from "../store/slices/isloader.slice";
import { getProductsThunk } from "../store/slices/products.slice";
import axios from "axios";
import { Link } from "react-router-dom";



const Buscar=()=>{
    
    const [show, setShow] = useState(false);
    const products=useSelector((state)=>state.Products)
    const dispatch=useDispatch()
    const namePropedad=useSelector((state)=>state.Propiedad) 
    const [dataName, setDataName] = useState("");
    const [filterProduct, setFilterProduct]=useState([])
    const [buscarComponet, setBuscarComponet]=useState(false)
   
    const handleClose = () => setShow(false);


    const handleShow = (data) =>{
        
       if(data==1){
        setShow(true)
        setBuscarComponet(true)
        const product=products.map((producto)=>(producto.title))
        dispatch(setBuscar(product))
        setDataName("title")
       }else if(data==2){
        setShow(true)
        setBuscarComponet(true)
        const product=products.map((producto)=>(producto.stay))
        dispatch(setBuscar(product))
         setDataName("stay")
       }else if(data==3){
        setShow(true)
        setBuscarComponet(true)
        const product=products.map((producto)=>(producto.price))
        dispatch(setBuscar(product))
        setDataName("price")
       }else if(data==0){
         setBuscarComponet(true)
         
         dispatch(setBuscar([]))
         setDataName([])
        }

    }

    useEffect(()=>{
        

        dispatch(getProductsThunk())
        dispatch(setLoader(true))

        axios
     .get(`https://api-de-cruceros.onrender.com/api/v1/products?${dataName}=${namePropedad}`)
        .then((resp)=> setFilterProduct(resp.data.Product))
        .catch(error=>console.error(error))
        .finally(()=>dispatch(setLoader(false)))

    }, [namePropedad, dataName,show  ])


    return(

        <section>
         <div className="buscar">
            <div className="buscar-title">
              <h1>Haz clic en los filtros para encontrar el crucero de tus sueños</h1>
              <div className="buscar-button">
                 <button onClick={()=>handleShow(1)} >Lugar</button>
                 <button onClick={()=>handleShow(2)}>Duracion</button>
                 <button onClick={()=>handleShow(3)}>Price</button>
                 <button onClick={()=>handleShow(0)}>Restablecer filtros</button>
              </div>
            </div>
               <OffcanvaFilter
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
              setShow={setShow}
              buscarComponet={buscarComponet}
               />
              
            
           <div className="container-card-buscar"> 

           
            {
            
            filterProduct.map((productItem)=>(
               <div className="cards-buscar" key={productItem.id}>
                    
                  <div className="card-img-descripcion">
                   <div className="img">
                    <Link to={`/product/${productItem.id}`}>
                    <img className="card-img" src={productItem.productimgs[0]?.url} alt="imagen-crucero" />
                    </Link>
                  </div>

                  

                  </div>
                  <div className="card-descripcion">
                     <span>Lugar</span>
                      <h2> {productItem.title}</h2>
                      <span>{productItem.category?.name}</span>
                   
                  </div>
                  
                   <div className="estadia">
                   <span>Estadia: {productItem.stay}</span>
                   </div>
                  <div className="price">
                      <span>Desde</span>
                      <h2>{productItem.price}€</h2>
                      <span>Tasas incluidas</span>
                  </div>
                   
           
               </div>
            ))
             
                 
             
            }
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
        </div>   
        </section>
        
    )
}

export default Buscar