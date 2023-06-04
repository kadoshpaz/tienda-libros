import { useContext } from "react";
import React from 'react';
import { Context } from "../Context";
import { useState } from "react";
import { NavLink } from "react-router-dom";


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
        <div className="container custom-container">
            <div className="mi-container">
                <div className="mi-info d-flex justify-content-center">
                    <div className="pedido mt-5">
                        <div className="el-contenedor">
                        <h3 className="text-white">Detalles del Pedido</h3>
                            <div className="detalle mt-3 mb-5">
                                {
                                    carrito.map((valor, index)=>(
                                        <div key={valor.id} className="d-flex justify-content-between border-bottom border-dark mb-3">
                                            <div className="nombre d-flex gap-2 m-1 align-items-center">
                                                <img src={valor.img} alt="" style={{width:'100px', height:'60px'}}/>
                                                <p style={{fontSize:'20px', fontWeight:'bold'}}>{valor.titulo.charAt(0).toUpperCase() + valor.titulo.slice(1)}</p>
                                            </div>
                                            <div className="define mb-3 d-flex align-items-center">
                                                <div className="precio mt-3">
                                                    {/* <p style={{fontSize:'20px', fontWeight:'bold'}}>$ {valor.cantidad * valor.price}</p> */}
                                                    <p style={{fontSize:'20px', fontWeight:'bold'}}>$ {Number(valor.cantidad * valor.precio).toLocaleString('es-CL')}</p>

                                                </div>                                           
                                                <button onClick={() => restarCantidad(index)} type="button" className="btn btn-danger">-</button>
                                                <div className="cantidad mt-3">
                                                    <p style={{fontSize:'20px'}}>{valor.cantidad}</p>
                                                </div>                                          
                                                <button onClick={() => sumarCantidad(index)} type="button" className="btn btn-primary">+</button>                                      
                                            </div>
                                        </div>
                                        
                                    ))
                                }
                                <h1>Total: ${sumaTotalCompra.toLocaleString('es-CL')} </h1>
                                <div className="mi-pago">
                                    <button type="button" class="btn btn-success">Ir a Pagar</button>
                                    <NavLink to='/'><button type="button" className="btn btn-warning ms-2">Agregar Pizza</button></NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}