import DetalleBook from "../components/detallebook";
import React from "react";
import { useParams } from "react-router-dom";

import ParticlesFondo from "../components/particlesFondo";


export default function DetalleLibro(params) {

    const { id } = useParams();

    return(
        <>
        <section className="container-fluid home-container">             
                <DetalleBook idLibro={id}/>
                <ParticlesFondo />
        </section>        
        </>
    )
}