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
import { Link } from "react-router-dom";


export default function Publicaciones() {
   
    const {user}= useContext(UserContext);
    const { libros, deleteProduct } = useContext(Context);

    const filteredProducts = libros.filter((miBook) => miBook.user === user.email);

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
                    <div className="d-flex justify-content-center contenedor">                      
                        {                                        
                        filteredProducts.length!==0 ?
                            (
                            libros
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

                                                <Link to={`/dashboard/actualizar/${miBook.id}`}>
                                                    <button type="button" className="btn btn-outline-warning text-dark">
                                                        <div className="contenido-editar d-flex justify-content-center align-items-center">
                                                            <div className="editar"></div>
                                                        </div>
                                                    </button>
                                                </Link>  

                                                <button type="button" className="btn btn-outline-warning text-dark" onClick={() => deleteProduct(miBook.id)}>
                                                    <div className="contenido-basurero d-flex justify-content-center align-items-center">
                                                        <div className="basurero">
                                                        </div>
                                                    </div>
                                                </button>                                                                                       
                                            </div>
                                        </div>    
                                    </div>
                                ))
                            ):
                            (<div className="card text-center">
                                <div class="card-header" style={{color:'red'}}>Aviso</div>
                                <div className="card-body">
                                    <h5 className="card-title">No tienes Publicaciones</h5>
                                    <p class="card-text">Recuerda Compartir tus preferencias</p>                      
                                    <div className="d-flex justify-content-center">
                                        <div className="advertencia"></div>
                                    </div>
                                </div>
                                <div className="card-footer text-body-secondary"></div>
                            </div>)        
                        }                                
                    </div>
               </div>
           </div>
       </section>
    )
}
