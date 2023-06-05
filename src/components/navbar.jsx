 import React from "react";
 import '../assets/css/navbar.css'
 import { NavLink } from "react-router-dom";
 export default function Navbar(params) {
     return(
         <>
         <nav className="navbar navbar-expand-lg bg-dark custom-navbar">
             <div className="container contiene">
              
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         <li className="nav-item mr-3">
                         <NavLink exact to="/" className="nav-link active text-white cambia-color fs-4" activeClassName="active">Home</NavLink>
                             {/* <a className="nav-link active text-white cambia-color fs-4" aria-current="page" href="#" id="">Home</a> */}
                         </li>
                         <li className="nav-item mr-3">
                             <a className="nav-link active text-white cambia-color fs-4" href="#">Ciencia Ficción</a>
                         </li>
                         <li className="nav-item mr-3">
                             <a className="nav-link active text-white cambia-color fs-4" href="#">Infantil</a>
                         </li>
                     </ul>
                     <form className="d-flex flex-column" role="search">
                         <div className="d-flex ">
                             <input className="form-control me-2" type="input" placeholder="Usuario" aria-label="Search" />
                             <input className="form-control me-2" type="password" placeholder="Password" aria-label="Search" />
                             <button className="btn btn-outline-warning" type="submit">{'>'}</button>
                         </div>
                         <div className="d-flex gap-3 justify-content-end">
                         <span><a className="registro" href="#">Registrarse</a></span>
                         <span><a className="registro-dos" href="#">¿Olvidó su contraseña?</a></span>
                         </div>
                     
                     </form>
                 </div>
             </div>
         </nav>
         </>
     )
 }
