import { NavLink } from 'react-router-dom';
import '../assets/css/busqueda.css';
import { Context } from '../Context';
import { useContext } from "react";

export default function Buscar(params) {
    const {sumaTotalCompra, miTotal}=useContext(Context);

    return(
        <>
            <div class="container-fluid p-0">
                <div className="my-box">
                    <div className="logo">
                        <p className='frase'><span>Mundo</span><span className='frase-uno'>Infinito</span><span className='frase-dos'>BOOKS</span></p>
                        <div className="mi-logo"></div>
                    </div>
                    <div className="busca">
                        <div class="input-group mb-3 input-group-lg">
                            <input type="text" className="form-control" placeholder="Ingrese búsqueda..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-warning" type="button" id="button-addon2">Buscar</button>
                        </div>
                    </div>
                    <div className="compras">
                        <div className="favoritos">
                            <div className="corazon"></div>
                            <div className="contenido">
                                <div className="cant">
                                    <p className='text-dark'>1</p>
                                </div>
                                <p className='text-carro'>WishList</p>
                            </div>
                        </div>
                        <div className="carro">
                            <NavLink to='/carrito'>
                                <div className="carrito"></div>
                            </NavLink>
                            <div className="contenido">
                                <div className="cant new-color">
                                    <p>{miTotal}</p>
                                </div>
                                <p className='text-carro'>Mi Carrito</p>
                            </div>
                            <h3 style={{color:'#FF6D60', textShadow: "1px 1px 1px black" }}>${sumaTotalCompra.toLocaleString('es-CL')}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}