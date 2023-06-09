/* eslint-disable jsx-a11y/anchor-is-valid */
import '../assets/css/catalogo.css'
import '../assets/css/contenedor.css'
import '../assets/css/titulos.css'
import '../assets/css/dashboard.css'
import '../assets/css/publicaciones.css'
import { UserContext } from '../UserContext'
import { useContext } from 'react'
import ParticlesFondo from '../components/particlesFondo'
import {NavLink} from 'react-router-dom';
import { Context } from '../Context'
import { ProductContext } from '../ProductContext'


export default function Publicaciones() {
   
   const {user}= useContext(UserContext);
   const { createProduct, products, deleteProduct } = useContext(ProductContext);
   const { libros } = useContext(Context);

//    const filteredProducts = products.filter((miBook) => miBook.user === user.email);
   const filteredProducts = libros.filter((miBook) => miBook.user === user.email);
   console.log(filteredProducts);

    return(
       <section>
           <ParticlesFondo />
           <div>
               <div className="container custom-container box-dashboard">
                   <div className="pt-2 d-flex align-items-center gap-2 mt-5">
                       <div className="titulo-seccion">
                           <h1>Publicaciones</h1>
                       </div>
                       <div className="logo-seccion"></div>
                       <hr className='barra' />
                   </div>
                   <div className="envuelve">
                    <div className="d-flex justify-content-center contenedor">
                       
                       {/* <div className="configuracion"> */}
                           {/* <div className="box-left">                                */}
                               {/* <div className='box-dash d-flex align-items-center justify-content-center'>
                                   <NavLink to='/dashboard/profile' className='no-decoracion d-flex align-items-center'>                                                                
                                       <div className="icon-userD">                                        
                                       </div>
                                       <h5 className='px-2'>Editar Perfil</h5>
                                   </NavLink>                               
                                   </div>
                                */}
                                   {/* <div className='box-dash d-flex align-items-center justify-content-center'>
                                       <div className="icon-favorite">                                        
                                       </div>
                                       <h5 className='px-2'>Mis Favoritos</h5>
                                   </div>
                                   <div className='box-dash d-flex align-items-center justify-content-center'>
                                        <NavLink to='/dashboard/agregar_libro' className='no-decoracion d-flex align-items-center'>   
                                            <div className="icon-publicar">                                        
                                            </div>
                                            <h5 className='px-2'>Agregar Libro</h5>
                                        </NavLink>    
                                   </div> */}
                                   {/* <div className='box-dash d-flex align-items-center justify-content-center'>
                                        <NavLink to='/dashboard/publicaciones' className='no-decoracion d-flex align-items-center'>
                                            <div className="icon-publicacion">                                        
                                            </div>
                                            <h5 className='px-2'>Mis Publicaciones</h5>
                                        </NavLink>
                                    </div> */}
                               
                            {/* <div className="box-right"> */}
                                    {/* <div className="contenedor py-5 caja-publicacion"> */}

                                        {/* <div className="caja-publicacion">
                                            
                                        </div> */}
                                        {
                                        
                                        filteredProducts.length!==0 ?
                                        (libros
                                            .filter(miBook=> miBook.user === user.email)
                                            .map(miBook =>(
                                                <div className="card" key={miBook.id}>
                                                    <img src={miBook.img} alt=""/>                          
                                                    <h5>{miBook.titulo}</h5>                          
                                                    <div className="d-flex flex-column align-items-start">
                                                        <p className='mb-1'> Autor: <span className='autor'>{miBook.autor}</span></p>                              
                                                        <p>Precio: <span className='precio'>${miBook.precio.toLocaleString('es-CL')}</span></p>
                                                    </div>
                                                    <NavLink to={`/libro/${miBook.id}`} >
                                                        <a href="http://">Ver más</a>
                                                    </NavLink>
                                                    <div className="d-flex justify-content-center mt-3">
                                                        <div className="btn-group me-2 " role="group" aria-label="First group">                                  
                                                            <button type="button" className="btn btn-outline-warning text-dark"><div className="contenido-editar d-flex justify-content-center align-items-center"><div className="editar"></div></div></button>                 
                                                            <button type="button" className="btn btn-outline-warning text-dark"><div className="contenido-basurero d-flex justify-content-center align-items-center"><div className="basurero"></div></div></button>                                                                
                                                           
                                                        </div>
                                                    </div>    
                                                </div>
                                            ))
                                        )
    
                                        :
                                        (<div class="card text-center">
                                            <div class="card-header" style={{color:'red'}}>
                                                Aviso
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">No tienes Publicaciones</h5>
                                                <p class="card-text">Recuerda Compartir tus preferencias</p>
                                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                               <div className="d-flex justify-content-center">
                                                    <div className="advertencia">

                                                    </div>
                                               </div>
                                            </div>
                                            <div className="card-footer text-body-secondary">
                                        
                                            </div>
                                        </div>)        
                            }                                
                                {/* </div> */}
                           {/* </div> */}
                       {/* </div> */}
                        {/* </div>     
                        
                        */}
                        </div>
                    </div>
               </div>
           </div>
       </section>
    )
}
