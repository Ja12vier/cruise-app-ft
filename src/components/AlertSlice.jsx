

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { setAlertSlice } from '../store/slices/alert.slice';
import { useDispatch } from 'react-redux';


const  AlertSlice=()=> {
 
    const alertSlice=useSelector((state)=>state.AlertSlice)

    const dispatch=useDispatch()
 
    
  if (alertSlice) {
    return (
      <Alert variant="danger" onClose={() => dispatch(setAlertSlice(false))} dismissible>
        <Alert.Heading>¡Hola!</Alert.Heading>
        <p>
         Parece que este viaje ya se encuentra en el carrito
        </p>
      </Alert>
    );
  }
  
}

export default AlertSlice;