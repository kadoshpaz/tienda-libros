/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CatalogoContext } from "../BuscaContext";
import ParticlesFondo from "../components/particlesFondo";
import { useNavigate } from 'react-router-dom';
import { Context } from "../Context";

import '../assets/css/contenedor.css'
import '../assets/css/catalogo.css'
import '../assets/css/titulos.css'



export default function Busqueda(params) {

    const { searchResults } = useContext(CatalogoContext);
    const {agregarLibro} = useContext(Context);



    const navegador=useNavigate();
    const agregaBook = ({id, precio, titulo, autor, img}) =>{
        agregarLibro({id, precio, titulo, autor, img});
        navegador('/carrito');
    }
    
    return(
        <section className=''>  
            <ParticlesFondo /> 
            <div className="mi-margen">
                {/* <Header /> */}
                {/* {categoriaSeleccionada === "" && <Header />} */}
            </div>  
            {/* <Navbar setCategoriaSeleccionada={setCategoriaSeleccionada} />  */}
            <div className="container custom-container">
                <div className="pt-5 d-flex align-items-center gap-2">
                    <div className="titulo-seccion">
                        <h1>Búsqueda</h1>
                    </div>
                    <div className="logo-seccion"></div>
                    <hr className='barra' />
                </div>
                <div className="contenedor py-5 grid-container d-flex justify-content-center">     
                {  
                (typeof searchResults ==='undefined') ?(
                    <div className="card text-center">
                    <div className="card-header">
                        
                    </div>
                    <div className="card-body">
                        <h1 className="card-title text-danger mb-5">Aviso</h1>
                        <h2 classname="card-text mb-5">Lo Sentimos, producto no encontrado</h2>
                        <NavLink to="/" href="#" className="btn btn-outline-warning text-dark" activeClassName="active">Volver al Catálogo</NavLink>
                    </div>
                    <div className="card-footer text-muted">                      
                    </div>
                    </div>
                )  
                : (   
                                           
                    <div className="card" key={searchResults.id}>
                        <img src={searchResults.img} alt=""/>                          
                        <h5>{searchResults.titulo}</h5>                          
                        <div className="d-flex flex-column align-items-start">
                            <p className='mb-1'> Autor: <span className='autor'>{searchResults.autor}</span></p>                              
                            <p>Precio: <span className='precio'>${searchResults.precio.toLocaleString('es-CL')}</span></p>
                        </div>
                        <NavLink to={`/libro/${searchResults.id}`} activeClassName="activeclassname">
                            Ver más
                        </NavLink>
                        <div className="d-flex justify-content-center mt-3">
                            <div className="btn-group me-2 " role="group" aria-label="First group">                                  
                                <button type="button" className="btn btn-outline-success"><div className="contenido-cora d-flex justify-content-center align-items-center"><div className="cora"></div></div></button>                 
                                <button onClick={()=>agregaBook(searchResults)} type="button" className="btn btn-outline-warning">Añadir 🛒</button>
                            </div>
                        </div>    
                    </div>)
                    
                    
                }             
                </div>
            </div>
        </section>
    )
}