import '../assets/css/catalogo.css'
import '../assets/css/contenedor.css'
import '../assets/css/titulos.css'
import '../assets/css/dashboard.css'
import '../assets/css/publicaciones.css'

import React, { useContext } from 'react'
import ParticlesFondo from '../components/particlesFondo';
import { FavoritesContext } from '../FavoritesContext';
// import { UserContext } from '../UserContext';
import {NavLink} from 'react-router-dom';

const Favorites = () => {
    const { favorites, deleteFavorites } = useContext(FavoritesContext);

  return (
<section>
           <ParticlesFondo />
           <div>
               <div className="container custom-container box-dashboard">
                   <div className="pt-2 d-flex align-items-center gap-2 mt-5">
                       <div className="titulo-seccion">
                           <h1>Favoritos</h1>
                       </div>
                       <div className="logo-seccion"></div>
                       <hr className='barra' />
                   </div>                  
                    <div className="d-flex justify-content-center contenedor">                      
                        {                                        
                        favorites.length!==0 ?
                            (
                            favorites
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

                                                <button type="button" className="btn btn-outline-warning text-dark" onClick={() => deleteFavorites(miBook.id)}>
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
                            (<div class="card text-center">
                                <div class="card-header" style={{color:'red'}}>Aviso</div>
                                <div class="card-body">
                                    <h5 class="card-title">No tienes Favoritos</h5>
                                    <p class="card-text">Selecciona los libros que más te gusten</p>                      
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

export default Favorites
