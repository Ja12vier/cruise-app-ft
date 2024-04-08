

import Modal from 'react-bootstrap/Modal';

const AlertShow=({alertshow, alertHandleClose , detailAlert })=>{



 
   
   if(detailAlert){
    return (
      <>
    
    
        <Modal show={alertshow} onHide={alertHandleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Necesitas iniciar sesión, para agregar un viaje al carrito.</Modal.Title>
          </Modal.Header>
          <Modal.Body> Por favor, inicia sesión para continuar O ¡Regístrate ahora si aún no tienes una cuenta!"</Modal.Body>
          <Modal.Footer>
           
          </Modal.Footer>
        </Modal>
      </>
    );
   }   
  
 return (
  <>


    <Modal show={alertshow} onHide={alertHandleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Para ver tu viajes pre reservado, necesitas iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body> Por favor, inicia sesión para continuar O ¡Regístrate ahora si aún no tienes una cuenta!"</Modal.Body>
      <Modal.Footer>
       
      </Modal.Footer>
    </Modal>
  </>
);

 }





export default AlertShow