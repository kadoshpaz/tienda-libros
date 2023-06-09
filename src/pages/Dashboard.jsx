 import '../assets/css/catalogo.css'
 import '../assets/css/contenedor.css'
 import '../assets/css/titulos.css'
 import '../assets/css/dashboard.css'
 import { UserContext } from '../UserContext'
 import { useContext } from 'react'
import ParticlesFondo from '../components/particlesFondo'
import {NavLink} from 'react-router-dom';
import { Context } from '../Context'


 export default function Dashboard(params) {
    
    const {user}= useContext(UserContext)
    const {libros} =useContext(Context);

    console.log(libros);
     return(
        <section>
            <ParticlesFondo />
            <div>
                <div className="container custom-container box-dashboard">
                    <div className="pt-2 d-flex align-items-center gap-2 mt-5">
                        <div className="titulo-seccion">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="logo-seccion"></div>
                        <hr className='barra' />
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="configuracion">
                            <div className="box-left">                               
                                <div className='box-dash d-flex align-items-center justify-content-center'>
                                    <NavLink to='/dashboard/profile' className='no-decoracion d-flex align-items-center'>                                                                
                                        <div className="icon-userD">                                        
                                        </div>
                                        <h5 className='px-2'>Editar Perfil</h5>
                                    </NavLink>                               
                                    </div>
                                
                                    <div className='box-dash d-flex align-items-center justify-content-center'>
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
                                    </div>
                                  
                                    <div className='box-dash d-flex align-items-center justify-content-center'>
                                        <NavLink to='/dashboard/publicaciones' className='no-decoracion d-flex align-items-center'>
                                            <div className="icon-publicacion">                                        
                                            </div>
                                            <h5 className='px-2'>Mis Publicaciones</h5>
                                        </NavLink>                                           
                                    </div>

                                </div>
                            <div className="box-right">
                                
                            </div>
                        </div>
                    </div>                          
                </div>
            </div>
        </section>
     )
 }
