import { useContext } from "react";
import React from 'react';
import { Context } from "../Context";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import '../assets/css/titulos.css';
import '../assets/css/contenedor.css';
import '../assets/css/carrito.css';
import ParticlesFondo from "../components/particlesFondo";


export default function Carro(){

    const {carrito, sumaTotalCompra, agregarLibro, quitarLibro, actualizarLibro}=useContext(Context);

    const [cantidad, setCantidad] = useState(carrito.map(book => book.cantidad));

    const sumarCantidad = (index) => {
        const nuevaCantidad = [...cantidad];
        nuevaCantidad[index] += 1;
        setCantidad(nuevaCantidad);
        agregarLibro({...carrito[index], cantidad: nuevaCantidad[index]});
    }

    const restarCantidad = (index) => {
        const nuevaCantidad = [...cantidad];
        if (nuevaCantidad[index] > 1) {
          nuevaCantidad[index] -= 1;
          setCantidad(nuevaCantidad);
          actualizarLibro(carrito[index].id, nuevaCantidad[index]);
        } else {
          quitarLibro(carrito[index].id);
        }
      }

    return(
        <>
        <section>    
        <ParticlesFondo />    
            <div className="container custom-container letrero">
                <div className="pt-5 d-flex align-items-center gap-2 mt-5">
                    <div className="titulo-seccion">
                        <h1>Carrito</h1>
                    </div>
                    <div className="logo-seccion"></div>
                    <hr className='barra' />
                </div>
                <div className="d-flex justify-content-center">
                    <div className="my-container">       
                        <h1 className="text-warning mb-5" style={{ textShadow: "1px 1px 1px black" }}>Detalles del Pedido</h1>
                        {
                            carrito.map((valor, index)=>(
                                <div key={valor.id} className="d-flex justify-content-between border-bottom border-dark mb-3">
                                    <div className="d-flex gap-2 m-1 align-items-center">
                                        <img src={valor.img} alt="" style={{width:'80px', height:'100px'}}/>
                                        <div>
                                            <p style={{fontSize:'20px', fontWeight:'bold'}} className='mb-1'>{valor.titulo}</p>
                                            <p className="text-muted"><span style={{color:'#1B9C85'}}>Autor:</span><span style={{color:'#FF6D60'}}> {valor.autor}</span></p>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex align-items-center">
                                        <div className="precio mt-3 mx-3">
                                            <p style={{fontSize:'20px', fontWeight:'bold'}}>${Number(valor.cantidad * valor.precio).toLocaleString('es-CL')}</p>
                                        </div>                                           
                                        <button onClick={() => restarCantidad(index)} type="button" className="btn btn-dark">-</button>
                                        <div className="cantidad mt-3 mx-1">
                                            <p style={{fontSize:'20px'}}> {valor.cantidad} </p>
                                        </div>                                          
                                        <button onClick={() => sumarCantidad(index)} type="button" className="btn btn-warning">+</button>                                      
                                    </div>
                                </div>
                                
                            ))
                        }
                        <h1>Total: <span style={{color:'#1B9C85'}}>${sumaTotalCompra.toLocaleString('es-CL')}</span> </h1>
                        <div className="mi-pago">
                            <button type="button" className="btn btn-dark">Comprar</button>
                            <NavLink to='/'><button type="button" className="btn btn-outline-warning ms-2 text-dark" activeClassName="activeclassname">Añadir Libro</button></NavLink>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        </>
    )
}