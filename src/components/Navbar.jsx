import Felicidades from '../icon/felicidad.png'
import Precio from '../icon/precio-bajo.png'
import Corona from '../icon/corona.png'
import Crucero from "../icon/crucero.png"
import OffcanvaFilter from './OffcanvaFilter'
import { useState, useEffect } from 'react'
import AlertShow from './AlertShow'
import { TfiMenu } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom'







const Navbar=()=>{
 

  const [alertshow, setAlertShow] = useState(false);
  const alertHandleClose = () => setAlertShow(false);
  const alertHandleShow = () => setAlertShow(true);

const [visible, setVisible]=useState(false)


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () =>{
   
    const token=localStorage.getItem("token")
    if(token){
     setShow(true)
    }else{
      alertHandleShow()
      
    }  
    
    }

    useEffect(()=>{
      
      const navMovil=document.querySelector(".container-section-movil")
     
      if(visible){
        navMovil.classList.add("nav-movil")
      }else{
        navMovil.classList.remove("nav-movil")
      }

    },[visible])

    const navMovilClose=()=>{
      setVisible(!visible)
    }

    return(
        <nav>

<div className="container-nav">
        
        <div className="navbar">
         
          <div className="contacto-logo">
           
              <Link to={"/"}>
                 <img src={Crucero} alt="logo-tipo" />
                 <span><span className='letra1'>Cruceros</span> <span className='letra2'>Jet</span> <span className='letra3'>plus</span></span>  
              </Link>    
             
          </div>
               
             
             <div className='icono-botton-nav'>
             <button className='button' onClick={()=>setVisible(!visible)}>{<TfiMenu />}</button>
             </div>

           <div className="nav section">
             <Link to={"/oferta"}>Ofertas</Link>
             <Link to={"/buscar"}>Buscar</Link>
             <Link onClick={handleShow}>Viajes-Pre-Reservado</Link>
           
           </div>
              
           <div className="nav login">
              <Link to={"/viajeCompletado"} className='link'>Reservas-Completada</Link>  
                <div className="linea"></div>
                <Link to={"/login"} className='link'>Acceso</Link>
           </div>


           <div className={`container-section-movil ${visible ? "nav-movil" : ""}`}>
            
                <div className='cerrar'><button className='button-movil' onClick={navMovilClose}> {<GrClose />}</button></div>

                <div className="link-movil">
                  <Link to={"/oferta"} onClick={navMovilClose}>Oferta</Link>
                  <Link to={"/buscar"}>Buscar</Link>
                  <Link onClick={handleShow}>Viajes-Pre-Reservado</Link>
                  <Link to={"/viajeCompletado"} onClick={navMovilClose}>Reservas-Completada</Link>
                  <Link to={"/login"}  onClick={navMovilClose}>Login</Link>
                </div>
             
           </div> 

        </div>

        
            <div className="barra promo">

                <div className="logo-section1">
                  <div className="icono">
                    <img src={Precio}alt="precio-bajo" />
                  </div>
                 <div className="span"><span>¡Tu crucero al mejor precio!</span></div>
              </div>

             <div className="logo-section2">
                <div className="icono">
                  <img src={Corona} alt="corona" />
                </div>
              <div className="spa"><span>Cada cliente merece un servicio excepcional</span></div>
             </div> 

             <div className="logo-section3">
                <div className="icono">
                  <img src={Felicidades} alt="carita" />
                </div>
               <div className="spa"><span>99% de clientes satisfechos</span></div>
             </div>
             
             
         </div>


        </div>
     
           <OffcanvaFilter
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
              setShow={setShow}
               />
              
            <AlertShow
            alertshow={alertshow}
            setAlertShow={setAlertShow}
            alertHandleClose={alertHandleClose}
           
            />
        </nav>
        
    )
}

export default Navbar