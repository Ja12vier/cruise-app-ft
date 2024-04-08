

import './App.css'
import {} from 'react-router-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'
import {Home, Oferta, Buscar, Login, ViajeCompletado, Detail, RegistroLogin} from './pages/index'
import Navbar from './components/Navbar'
import IsLoader from './components/IsLoader'
import { useSelector} from 'react-redux'
import ProtecteRoutes from './components/ProtecteRoutes'
import AlertShow from './components/AlertShow'




function App() {
  
  const Loader=useSelector((state)=>state.Loader)

  return (
    <HashRouter>
        <Navbar/>
        <AlertShow/>

           {Loader && <IsLoader/> }
         

              <Routes>

              <Route
               path='/'
               element={<Home/>}
              />

               <Route
               path='/oferta'
               element={<Oferta/>}
              />

               <Route
               path='/buscar'
               element={<Buscar/>}
              />

               <Route
               path='/login'
               element={<Login/>}
              />
              
               <Route
               path='/login/registroLogin'
               element={<RegistroLogin/>}
              />
               
               <Route
               path='/product/:id'
               element={<Detail/>}
              />
             
               <Route element={<ProtecteRoutes/>}>
                      <Route
                      path='/viajeCompletado'
                      element={<ViajeCompletado/>}
                      />

               </Route>

             </Routes>

    </HashRouter>
    
  )
}

export default App
