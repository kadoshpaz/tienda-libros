 import { useState } from "react";
 import { useContext } from "react";
import { UserContext } from "../UserContext";
 import {useNavigate} from 'react-router-dom'

 const Login = () =>{

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


     return (
       <>
         <h1>App LOGIN</h1>
         <form onSubmit={handleSubmit} action="">
             <input type="text" placeholder="email" value={email} onChange={e=> setEmail(e.target.value)}/>
             <input type="password" placeholder="password" value={password} onChange={e=> setPassword(e.target.value)}/>
             <button type="submit">Acceder</button>
         </form>        
       </>
     )
   }

   
   export default Login;