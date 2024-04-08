


import axios from "axios"
import { useState } from "react"
import { useNavigate, Link} from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa";


const Login=()=>{


const [email, setEmail]=useState("")
const [password, setPassword]=useState("")

const navigate=useNavigate()


const handleSubmit=(e)=>{
 e.preventDefault()
  
 const errorName=document.getElementById("errorName")
  const data={
    email, 
    password
  }

  axios
  .post("https://api-de-cruceros.onrender.com/api/v1/users/login", data)
  .then((resp)=>{
    console.log(resp.data?.token)
    errorName.textContent=""
    localStorage.setItem("token", resp.data?.token)
    navigate("/")
    
  
  })
  .catch((error)=>{
    console.error(error)
    errorName.textContent=`Email o contraseña incorrecta por favor intenta de nuevo.`

  })

}



    return (
      <div className="container-login">

        <form className="form-login" onSubmit={(e)=>handleSubmit(e)}>

        
            
          <div className="title"><h2>!Bienvenido¡</h2></div>

          <div className="icono-registrar">
             <FaRegUserCircle />
             </div>
                <label htmlFor="email">Email</label>
                <input type="email"
                id="email"
                placeholder="name@gmail.com"
                value={email}
               onChange={(e)=>setEmail(e.target.value)}
                />
            

                <label htmlFor="password">Password</label>
                <input type="password"
             
                id="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            <div className="errorLogin"><span id="errorName" className="errorName"></span></div>
          <div className="button">
            <button type="submit">Iniciar seccion</button>
          </div>
          <div>
            <span>¿No tienes cuenta? <Link to={"/login/registroLogin"}>Registrate</Link> </span>
          </div>

        </form>
       
      </div>
    )
}

export default Login