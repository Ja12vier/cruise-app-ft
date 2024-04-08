
import Crucero from "../icon/crucero.png"
import Telefono from "../icon/llamada.png"
import Email from "../icon/email.png"
import Ubicacion from "../icon/ubicacion.png"
import Youtube from "../icon/youtube.png"
import Instagram from "../icon/instagram.png"
import Facebook from "../icon/facebook.png"
import { useState } from "react"

const Footer=()=>{

const [email, setEmail]=useState({})

   const handleSubmit=(e)=>{
    e.preventDefault()
    alert("Gracias por su subcripcion")
   }

    return(
        <footer>
            <div className="footer">
                <div className="container footer">

                    <div className="container footer-section1">
                                <div className="title">
                                    <h3>Newsletter</h3>
                                    <p>¡Inscríbete y no te pierdas nuestras mejores ofertas!</p>
                                </div>

                                <div className="input">

                                    <form onSubmit={(e)=>handleSubmit(e)}>
                                          
                                          <div className="form">
                                            <input 
                                                type="email"
                                                id="email"
                                                placeholder="Escribe tu e-mail"
                                                />
                                            <button type="submit">Inscribirse</button>

                                          </div>
                        
                                    </form>
                                    
                                </div>
                        </div>


                           <hr />

                       <div className="container-footer-section2">
                        
                           <div className="container contacto " >

                               <div className="contacto-logo">
                                <img src={Crucero} alt="logo-tipo" />
                                <span>Cruceros <span>Jet</span> Plus</span>
                               </div>

                               <div className="telefono">
                                <div className="icono-telefono">
                                    <img src={Telefono} alt="telefono" />
                                </div>
                                <span>(809)-484-1714</span>
                               </div>
                                
                                <div className="email">
                                    <div className="email-icono">
                                        <img src={Email} alt="email" />
                                    </div>
                                    <span>info@crucerosJetplus.com</span>
                                </div>

                                <div className="ubicacion">
                                    <div className="ubicacion-icono">
                                        <img src={Ubicacion} alt="ubicacion" />
                                    </div>

                                    <div className="ubicacion-localidad">
                                     <span>6 Boulevard des Moulins</span>  
                                     <span>98000 Monaco</span>
                                
                                    </div>
                                </div>

                                <div className="localidad">
                                <span>RCI : 13 S 060002</span>
                                <span>TVA : FR 89 00 01 01 61</span>
                                <span>NIS : 79 12 Z1 57 4</span>
                                </div>

                           </div>
                              
                                    <div className="container destino">
                                        <h5> Destino</h5>
                                        <span>Mediterráneo</span>
                                        <span>Caribe</span>
                                        <span>América del sur</span>
                                        <span>Vuelta al mundo</span>
                                        <span>Norte de Europa</span>
                                        <span>Trasatlántico</span>
                                        <span>Uruguay</span>
                                    </div>

                                    <div className="container destino">
                                        <h5>Compañías</h5>
                                        <span>MSC Cruceros</span>
                                        <span>Costa Cruceros</span>
                                        <span>Royal Caribbean</span>
                                        <span>Norwegian Cruise Line</span>
                                        <span>Celestyal Cruises</span>
                                        <span>Silversea</span>
                                        <span>Todas las compañías</span>
                                    </div>

                                    <div className="container destino">
                                        <h5>Puertos de salida</h5>
                                        <span>Barcelona</span>
                                        <span>Venecia</span>
                                        <span>Miami</span>
                                        <span>Copenhague</span>
                                        <span>Celestyal Cruises</span>
                                        <span>Malaga</span>
                                        <span>Todos los puertos de salida</span>
                                    </div>
            
                           </div>

                         <hr />

                        <div className="footer-final">
                           <div className="derechos-reservado">
                           <span>© 2024 Cruceros Jet Plus. Todos los derechos reservados.</span>
                           </div>

                            <div className="redesociales">
                            <a href="">
                                <div className="rede">
                                <img src={Facebook}alt="facebook" />
                                </div>
                            </a>

                            <a href="">
                            <div className="rede">
                                 <img src={Instagram} alt="instagram" />   
                            </div>
                            </a>

                            <a href="">
                            <div className="rede">
                                 <img src={Youtube}alt="you-tube" />   
                             </div>
                            </a>
                            
                            </div>

                        </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer