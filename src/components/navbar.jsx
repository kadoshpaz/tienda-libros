import React from "react";
import '../assets/css/navbar.css'

export default function Navbar(params) {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-dark custom-navbar">
            <div className="container">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mr-3">
                            <a className="nav-link active text-white cambia-color fs-3" aria-current="page" href="#" id="">Home</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link active text-white cambia-color fs-3" href="#">Contacto</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link active text-white cambia-color fs-3" href="#">Nosotros</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="input" placeholder="Usuario" aria-label="Search" />
                        <input className="form-control me-2" type="password" placeholder="Password" aria-label="Search" />
                        <button className="btn btn-outline-warning" type="submit">{'>'}</button>
                    </form>
                </div>
            </div>
        </nav>
        </>
    )
}