 import '../assets/css/catalogo.css'
 import '../assets/css/contenedor.css'
 import '../assets/css/titulos.css'
 import '../assets/css/dashboard.css'
 import { UserContext } from '../UserContext'
 import { useContext } from 'react'

 export default function Dashboard(params) {
    
    const {user}= useContext(UserContext)
     return(
        <div>
            <div className="container custom-container">
                <div className="box-dashboard">
                <h1>Hola {user.name}</h1>

                </div>          
            </div>
        </div>
     )
 }
