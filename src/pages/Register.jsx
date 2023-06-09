
 import '../assets/css/catalogo.css'
 import '../assets/css/contenedor.css'
 import '../assets/css/titulos.css'
 import '../assets/css/register.css'

import { useContext, useState } from 'react';
import { UserContext } from '../UserContext'
import ParticlesFondo from '../components/particlesFondo';
import Swal from 'sweetalert2'
// import { useNavigate } from 'react-router-dom';

const Register = () => {

  const {users, register} = useContext(UserContext);
  // const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');


  const handleSubmit = e =>{
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

    const usuario= register({
      id: generateRandomId(),
      name,
      surname,
      email,
      phone,
      password,
      repassword     
    })

    if (usuario) {
      setName('');
      setEmail('');
      setSurname('');
      setPhone('');
      setPassword('');
      setRepassword('');

      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El email ya está registrado",
      });
    }
    else{
      return Swal.fire('Gracias por registrate');
    }

    // navigate.push("/dashboard");

  }

  const generateRandomId = () => {
    const existingIds = users.map((user) => parseInt(user.id));
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 999) + 1;
    } while (existingIds.includes(randomId));

    return randomId.toString().padStart(3, '0');
  };

  return (
    <section>
      <ParticlesFondo />  

    <div className="container custom-container box-dashboard">
        <div className="pt-2 d-flex align-items-center gap-2 mt-2">
            <div className="titulo-seccion">
                <h1>Registro</h1>
            </div>
            <div className="logo-seccion"></div>
            <hr className='barra' />
        </div>
        <div className="form-register d-flex justify-content-center align-items-center flex-column">
          <div className="icono-register">
            <div className="circle-icon">
              <i className="fa-solid fa-user fa-lg"></i>
            </div>
          </div>
          <h1 className='mb-2'>Crea tu cuenta de usuario</h1>
          <div className="card p-5 box-register shadow-lg mb-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 input-container">
                  <i className="fa-solid fa-id-card fa-xl"></i>
                  <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
                  
              </div>
              <div className="mb-3 input-container">
                  {/* <label for="exampleFormControlInput1" className="form-label"></label> */}
                  <i class="fa-solid fa-id-card fa-xl"></i>
                  <input type="text" className="form-control" placeholder="Apellido" value={surname} onChange={e => setSurname(e.target.value)}/>
              </div>
              <div className="mb-3 input-container">
                  {/* <label for="exampleFormControlInput1" className="form-label"></label> */}
                  {/* <i class="fa-solid fa-envelope fa-xl"></i> */}
                  <i class="fa-solid fa-id-card fa-xl"></i>
                  <input type="email" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="mb-3 input-container">
                  {/* <label for="exampleFormControlInput1" className="form-label"></label> */}
                  <i class="fa-solid fa-mobile-screen-button fa-xl"></i>
                  <input type="tel" className="form-control" placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)}/>
              </div>
              <div className="mb-3 input-container">
                  {/* <label for="exampleFormControlInput1" className="form-label"></label> */}
                  <i class="fa-solid fa-key fa-xl"></i>
                  <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className="mb-3 input-container">
                  {/* <label for="exampleFormControlInput1" class="form-label"></label> */}
                  <i class="fa-solid fa-key fa-xl"></i>
                  <input type="password" className="form-control" placeholder="Reingrese Password" value={repassword} onChange={e => setRepassword(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-warning btn-lg">Registrarme  <i class="fa-regular fa-square-check fa-xl"></i></button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register