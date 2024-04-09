

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoriesThunk } from "../store/slices/categories.slice"
import { getProductsThunk } from "../store/slices/products.slice"
import { Link } from "react-router-dom"
import AccoDion from "../components/Accordion"
import Footer from "../components/Footer"



const Home=()=>{

    const dispatch=useDispatch()
    const categories=useSelector((state)=>state.Categories)
    const products=useSelector((state)=>state.Products)
    const [productFilter, setProrductFilter]=useState([])
    const [categoryProduct, setcategoryProduct]=useState([])
    const [colorBorderBotton1, setColorBorderBotton1]=useState("7px solid rgb(244, 252, 27)")
    const [colorBorderBotton2, setColorBorderBotton2]=useState("7px solid rgb(244, 252, 27)")
    const [colorBorderBotton4, setColorBorderBotton4]=useState("7px solid rgb(244, 252, 27)")
    
       useEffect(()=>{

        dispatch(getCategoriesThunk())
        dispatch(getProductsThunk())
        
       

        categoriaExclusiva(categories[2]?.id)

        if(productFilter==0){
       filterCategorie(1)

        }

       }, [productFilter])

    

     const filterCategorie=(data)=>{
        
  

     const filtrar=products.filter((producto)=>producto.categoryId==data)

     setProrductFilter(filtrar)
      
     if(data==1){
       setColorBorderBotton1("7px solid rgb(244, 252, 27)")
       setColorBorderBotton2("transparent")
       setColorBorderBotton4("transparent")
     }else if(data==2){
     setColorBorderBotton1("transparent")
     setColorBorderBotton2("7px solid rgb(244, 252, 27)")
     setColorBorderBotton4("transparent")
       }else{
        setColorBorderBotton1("transparent")
        setColorBorderBotton2("transparent")
        setColorBorderBotton4("7px solid rgb(244, 252, 27)")
       }
     }

     const categoriaExclusiva=(id)=>{
        
        const filtrar=products.filter((producto)=>producto.categoryId==id).slice(0,5)
       
        setcategoryProduct(filtrar)
     }
        
     

    return(
       <section>
         <div className="home">

<div className="imagen crucero">
     <div className="img">

         <a href="#/oferta">
         <img src="https://www.crucerosplus.com/img/admin/sliders/Slider_MSC_26_12_2023_desktop-20231227085155.webp" alt="crucero" />
         </a>  
     </div>
  </div>

  <div className="home bienbenido">
     <p className="p1">¡Bienvenid@ a Cruceros Plus!</p>
     <p className="p2">¡Reserva tu crucero a un precio inmejorable!</p>

  </div>

 <div className="contenedor oferta">
 

   <div className="home oferta">

     <div className="oferta">
        <p className="p3">Nuestra mejores ofertas</p>
     </div>

      <div className="categorie link">
       
        <Link style={{borderBottom: colorBorderBotton1}}  onClick={()=>filterCategorie(categories[0]?.id)} className="mi-enlaces"><span>Mediterraneo</span></Link>
        <Link style={{borderBottom: colorBorderBotton2}}  onClick={()=>filterCategorie(categories[1]?.id)}className="mi-enlaces mi-enlaces-1" ><span>Vuelta al mundo</span></Link>
        <Link style={{borderBottom: colorBorderBotton4}}  onClick={()=>filterCategorie(categories[3]?.id)}className="mi-enlaces"><span>Caribe</span></Link>
      </div>

   </div>

<div className="card-container-oferta">
    <div className="card-oferta-carousel">
        <div className="carts-oferta">
            {
                productFilter.map((cart)=>(
                    <li className="card" key={cart.id}>
                    <div className="container-cartd">
                <Link to={`/product/${cart.id}`}>

                    <div className="cart img">
                        <img src={cart.productimgs[0]?.url} alt="yate" />
                        <p className="title">{cart.stay}</p>
                    </div>

                </Link> 
                <div className="stay">
                <h5 className="title"><span>{cart.title}</span></h5>
                <p className="dia-duracion"><span>Estadia  </span>{cart.category.name}</p>
                <p className="dia-duracion">Desde  <span className="price">USD{cart.price}</span> /Persona</p>
                </div>
            
        </div>
                    </li>
                ))
            }
            
            
        </div>

    </div>
</div>

   

   <div className="categories exclusiva">

                    <div className="title">
                        <h2>Nuestra categorias mas exclusiva</h2>
                    </div>

                    <div className="card-imagen-categoria">
                        <div className="card-container">
                                <div className="contane-cart-exclusiva">

                                                    {
                                                                categoryProduct.map((itemProducto)=>(
                                                        <div className="categorie-cart" key={itemProducto.id}>
                                                        <Link to={`/product/${itemProducto.id}`}>
                                                            
                                                            <img src={itemProducto.productimgs[0]?.url} alt="imagen-de-producto" />
                                                            <div className="img-title">
                                                                <h3>{itemProducto.title}</h3>
                                                        </div>
                                                        </Link>
                                                        </div>
                                                                ))
                                                    }

                                                </div> 
                        </div>
                    </div>

                  

   </div>
          
          <div className="compañia-crucero">
            <h2>Compañías de cruceros disponibles</h2>
                <div className="container image">

                    <div className="img1">
                        <div><img src="https://www.crucerosplus.com/img/admin/companies/oceania-20231129095534.webp" alt="img1" /></div>
                    </div>

                    <div className="img1">
                        <img src="https://www.crucerosplus.com/img/admin/companies/paulgauguin-20231129095608.webp" alt="img2" />
                    </div>

                    <div className="img1">
                        <img src="https://www.crucerosplus.com/img/admin/companies/ncl-20231129095504.webp" alt="img3" />
                    </div>

                    <div className="img1">
                        <img src="https://www.crucerosplus.com/img/admin/companies/rccl-20231129095702.webp" alt="im4" />
                    </div>
                
                    <div className="img1">
                        <img src="https://www.crucerosplus.com/img/admin/companies/carnival-20231129093658.webp" alt="img5" />
                    </div>
               </div>
          </div>


        <div className="sobre-nosotro">
        
            <div className="title">
                <h2>¿Por qué reservar con Cruceros Plus?</h2>
            </div>

            <div className="containe-home-descripcion " >
                <div className="container-descripcion">
                 <h3>Nuestro equipo de ensueño</h3>
                 <p>En Cruceros Plus a todos nos impulsa una misma ambición: 
                    ¡tu satisfacción!. Confía en nuestra experiencia: déjate guiar por nuestros expertos 
                    al reservar tu crucero para que vivas unas vacaciones perfectas e inolvidables.</p>
                </div>
        
                <div className="img">
                    <img src="https://www.crucerosplus.com/img/equipe-starcroisieres.jpg" alt="img-del-personal" />
                </div>
            </div>

    </div>

      <div className="accordion">
         <h2>Lo que debes saber antes de irte de crucero</h2>

          <div className="accordion-home">
             <AccoDion/>
          </div>
      </div>
       
      
</div>  

     <div className="footer-home">
         <Footer/>
       </div>
     
 </div>
       </section>
    )
}

export default Home