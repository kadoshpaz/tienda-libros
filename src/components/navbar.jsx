/* eslint-disable jsx-a11y/anchor-is-valid */
 import React, { useContext, useState } from "react";
 import '../assets/css/navbar.css'
 import { NavLink, useNavigate } from "react-router-dom";
 import { UserContext } from "../UserContext";

 export default function Navbar(params) {

    const { user,logout} = useContext(UserContext);

    const {login} = useContext(UserContext);
    const navigate = useNavigate()
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('')


    const handleSubmit = async (e) =>{

        e.preventDefault()

        const user = await login(email, password)

        if (user) {
            setEmail('');
            setPassword('');
            navigate('/dashboard');
        }
        else{
            alert('Credenciales Incorrectas');
        }      
    }  

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
                            <NavLink to="/" className="nav-link active text-white cambia-color fs-4" activeClassName="activeactiveclassname">Home</NavLink>
                        </li>
                        <li className="nav-item mr-3">
                            <NavLink
                               to="/ciencia-ficcion"
                               className="nav-link active text-white cambia-color fs-4"
                               activeClassName="activeclassname">
                               Ciencia Ficción
                           </NavLink>
                        </li>
                        <li className="nav-item mr-3">
                           <NavLink 
                               to="/infantil"
                               className="nav-link active text-white cambia-color fs-4"
                               activeClassName="activeclassname"
                               >Infantil
                           </NavLink>
                        </li>
                       {
                        user ?(
                           <li className="nav-item mr-3">
                               <NavLink 
                                   to="/dashboard"
                                   className="nav-link active text-dashboard cambia-color fs-4"
                                   activeClassName="activeclassname"
                                   style={{color:'#6DDABE', fontWeight:'bold'}}
                                   >Dashboard
                               </NavLink>
                           </li>                                
                        ):('')
                       } 
                    </ul>
                   
                    {
                        user ? (                                                  
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center">                               
                                    <div className="icono-usuario"></div>
                                    <p className="letra-sesion" style={{fontSize:'20px'}}>Bienvenido: <span style={{color:'#6DDABE', fontWeight:'bold'}}>{user.name}</span></p>                               
                                </div>
                                <div>
                                    <NavLink to=''>
                                        <div className="d-flex align-items-center">                               
                                            <div className="icono-logout" onClick={logout}></div>
                                        </div>                                          
                                    </NavLink>                                
                                </div>
                            </div>                                           
                        ):(                        
                        <form className="d-flex flex-column" role="search" onSubmit={handleSubmit}>
                            <div className="d-flex ">
                                <input className="form-control me-2" type="input" placeholder="Usuario" aria-label="Search" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                                <input className="form-control me-2" type="password" placeholder="Password" aria-label="Search" 
                                value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <button className="btn btn-outline-warning" type="submit">{'>'}</button>
                            </div>
                            <div className="d-flex gap-3 justify-content-end">
                                <span><NavLink to='/register' className="registro" href="#">Registrarse</NavLink></span>
                                <span><a className="registro-dos" href="#">¿Olvidó su contraseña?</a></span>
                            </div>                    
                        </form>                                              
                        )
                   }
                </div>
            </div>
        </nav>
        </>
    )
 }
