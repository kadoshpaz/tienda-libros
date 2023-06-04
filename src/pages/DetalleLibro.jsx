import DetalleBook from "../components/detallebook";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import ParticlesFondo from "../components/particlesFondo";


export default function DetalleLibro(params) {

    const { id } = useParams();

    return(
        <>
        <section className="container-fluid home-container">
            {/* <div className=""> */}
               
                <DetalleBook idLibro={id}/>
                <ParticlesFondo />
            {/* </div> */}
        </section>
        
        </>
    )
}