
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistroLogin=()=>{
 const navigate=useNavigate()
 
const handleSubmit=(e)=>{
    e.preventDefault()
    const errorName=document.getElementById("errorName")
    const data={
        userName: e.target[0].value,
        role: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value
    }
    console.log(data.password.length);
    if(!data.userName){
            errorName.textContent="Error no puede haber campos vacios."
            return false
    }else if(data.password.length > 7  || data.password.length < 4){
        errorName.textContent="Error la contaseña tiene que tener mas de 3 caracteres y menos de  7 ."
        
        return false
    }

    axios
    .post(`https://api-de-cruceros.onrender.com/api/v1/users`, data)
    .then((resp)=>{
        errorName.textContent=""
        console.log(resp.data)
        navigate("/login")
     })
    .catch((error)=>{
        errorName.textContent=`Existe un usuario con este email ${data.email} registrado.`

        console.log(error)})
    
    
}
    return(
     <section>
        <div className="registro-login">

            <form  onSubmit={(e)=>handleSubmit(e)} className="registro-login-form">
             <div className="icono-registrar">
             <FaRegUserCircle />
             </div>
            <label htmlFor="name">Name</label>
            <input type="text"
            id="name"
            placeholder="name"
    
             />

            <label htmlFor="role">Role</label>
            <input type="text"
            id="role"
            placeholder="visitantes"
   
           
             />

            <label htmlFor="email">Email</label>
            <input type="email"
            id="email"
            placeholder="name@gmail.com"
       
             />

            <label htmlFor="password">Password</label>
            <input type="password"
            id="password"
            placeholder="password"
      
             />  
             <span id="errorName" className="errorName"></span>
             <div className="button"><button style={{borderRadius:"5px"}} type="submit">Registrar</button></div>
            </form>
           
           
        </div>
     </section>
    )
}


export default RegistroLogin