/* eslint-disable react-hooks/exhaustive-deps */

import '../assets/css/catalogo.css'
 import '../assets/css/contenedor.css'
 import '../assets/css/titulos.css'
 import '../assets/css/register.css'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Swal from "sweetalert2";
import ParticlesFondo from "../components/particlesFondo";
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState('');

  useEffect(() => {
    setName(user.name);
    setSurname(user.surname);
    setEmail(user.email);
    setPhone(user.phone);
    setPassword(user.password);
    setRepassword(user.repassword);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword) {

      setName('');
      setEmail('');
      setSurname('');
      setPhone('');
      setPassword('');
      setRepassword('');

      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las Contraseñas no coinciden!!",
      });     
      // return alert('Las contraseñas no coinciden')
    }

    updateUser({
      email: email,
      name: name,
      surname: surname,
      phone: phone,
      password: password,
      repassword: repassword,
      id: user.id,
    });
    
    navigate('/dashboard');
    Swal.fire("Datos actualizados");

  };

  return (
    <section>
    <ParticlesFondo />  

  <div className="container custom-container box-dashboard">
      <div className="pt-2 d-flex align-items-center gap-2 mt-2">
          <div className="titulo-seccion">
              <h1>Profile</h1>
          </div>
          <div className="logo-seccion"></div>
          <hr className='barra' />
      </div>
               
               
      <div className="d-flex justify-content-center">
        <div className="configuracion">
          <div className="box-left">                   
            <div className='box-dash d-flex align-items-center justify-content-center'>
            <NavLink to='/dashboard/profile' className='no-decoracion d-flex align-items-center'>    
                <div className="icon-userD">                                        
                </div>
                <h5 className='px-2'>Editar Perfil</h5>
            </NavLink>                               
            </div>
                        
            <div className='box-dash d-flex align-items-center justify-content-center'>
                <div className="icon-favorite">                                        
                </div>
                <h5 className='px-2'>Mis Favoritos</h5>
            </div>

            <div className='box-dash d-flex align-items-center justify-content-center'>
              <NavLink to='/dashboard/agregar_libro' className='no-decoracion d-flex align-items-center'>   
                  <div className="icon-publicar">                                        
                  </div>
                  <h5 className='px-2'>Agregar Libro</h5>
              </NavLink>    
            </div>

            
              <div className='box-dash d-flex align-items-center justify-content-center'>
                <NavLink to='/dashboard/publicaciones' className='no-decoracion d-flex align-items-center'>
                    <div className="icon-publicacion">                                        
                    </div>
                    <h5 className='px-2'>Mis Publicaciones</h5>
                </NavLink>
              </div>
            
          </div>
          <div className="box-right">
            <div className="form-register d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex mb-5 align-items-center justify-content-center">
                <div className="icono-register pt-5 mt-1">
                  <i class="fa-solid fa-user fa-sm"></i>
                </div>
                <h4 className='mx-3 mt-5'>Editar Usuario</h4>
              </div>
              <div className="card p-5 box-register shadow-lg">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 input-container">
                      <i className="fa-solid fa-id-card fa-xl"></i>
                      <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />               
                  </div>
                  <div className="mb-3 input-container">                                   
                      <i className="fa-solid fa-id-card fa-xl"></i>
                      <input type="text" className="form-control" placeholder="Apellido" value={surname} onChange={e => setSurname(e.target.value)}/>
                  </div>
                  <div className="mb-3 input-container">
                      <i className="fa-solid fa-id-card fa-xl"></i>
                      <input type="email" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} disabled/>
                  </div>
                  <div className="mb-3 input-container">
                      <i className="fa-solid fa-mobile-screen-button fa-xl"></i>
                      <input type="tel" className="form-control" placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)}/>
                  </div>
                  <div className="mb-3 input-container">
                      <i className="fa-solid fa-key fa-xl"></i>
                      <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                  </div>
                  <div className="mb-3 input-container">
                    <i className="fa-solid fa-key fa-xl"></i>
                    <input type="password" className="form-control" placeholder="Reingrese Password" value={repassword} onChange={e => setRepassword(e.target.value)} />
                   </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-warning btn-lg" >Actualizar  <i className="fa-regular fa-square-check fa-xl"></i></button>
                  </div>
                </form>
              </div>
            </div>                                          
          </div>
        </div>
      </div>  




      {/* <div className="form-register d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex mb-5 align-items-center justify-content-center">
            <div className="icono-register">
              <i class="fa-solid fa-user fa-sm"></i>
            </div>
          <h4 className='mx-3'>Editar Usuario</h4>
        </div>
        <div className="card p-5 box-register shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 input-container">
                <i className="fa-solid fa-id-card fa-xl"></i>
                <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />               
            </div>
            <div className="mb-3 input-container">

                <i class="fa-solid fa-id-card fa-xl"></i>
                <input type="text" className="form-control" placeholder="Apellido" value={surname} onChange={e => setSurname(e.target.value)}/>
            </div>
            <div className="mb-3 input-container">

                <i class="fa-solid fa-id-card fa-xl"></i>
                <input type="email" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} disabled/>
            </div>
            <div className="mb-3 input-container">

                <i class="fa-solid fa-mobile-screen-button fa-xl"></i>
                <input type="tel" className="form-control" placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)}/>
            </div>
            <div className="mb-3 input-container">

                <i class="fa-solid fa-key fa-xl"></i>
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <button type="submit" className="btn btn-warning btn-lg" >Actualizar  <i class="fa-regular fa-square-check fa-xl"></i></button>

          </form>
        </div>
      </div> */}
      
  </div>
  </section>

  );
};
export default Profile;



