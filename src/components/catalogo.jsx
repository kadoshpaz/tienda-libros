import '../assets/css/catalogo.css';
import '../assets/css/titulos.css';
import bookImage from '../assets/img/book.jpg';
import '../assets/css/contenedor.css';
import { useContext } from "react";
import { Context } from "../Context";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Catalogo(params) {
    const {libros, agregarLibro} = useContext(Context);
    const navegador=useNavigate();
    
    const agregaBook = ({id, precio, titulo, autor, img}) =>{
        agregarLibro({id, precio, titulo, autor, img});
        navegador('/carrito');
    }
    return(
        <section className=''>      
        <div className="container custom-container">
            <div className="pt-5 d-flex align-items-center gap-2">
                <div className="titulo-seccion">
                    <h1>Catálogo</h1>
                </div>
                <div className="logo-seccion"></div>

                <hr className='barra' />
            </div>
            <div className="contenedor py-5 grid-container">
                 {   
                   libros.map(miBook =>(
                        <div className="card" key={miBook.id}>
                            <img src={miBook.img} alt=""/>                          
                            <h5>{miBook.titulo}</h5>                          
                            <div className="d-flex flex-column align-items-start">
                                <p className='mb-1'> Autor: <span className='autor'>{miBook.autor}</span></p>                              
                                <p>Precio: <span className='precio'>${miBook.precio.toLocaleString('es-CL')}</span></p>
                            </div>
                            <NavLink to={`/libro/${miBook.id}`}>
                                <a href="http://">Ver más</a>
                            </NavLink>
                            <div className="d-flex justify-content-center mt-3">
                                <div class="btn-group me-2 " role="group" aria-label="First group">                                  
                                    <button type="button" class="btn btn-outline-success"><div className="contenido-cora d-flex justify-content-center align-items-center"><div className="cora"></div></div></button>                 
                                    <button type="button" class="btn btn-outline-warning">Añadir 🛒</button>
                                </div>
                            </div>    
                        </div>
                    )
                )}
            </div>
        </div>
        </section>
    )
}