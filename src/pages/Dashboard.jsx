 import '../assets/css/catalogo.css'
 import '../assets/css/contenedor.css'
 import '../assets/css/titulos.css'
 import '../assets/css/dashboard.css'
 import { UserContext } from '../UserContext'
 import { useContext } from 'react'
import ParticlesFondo from '../components/particlesFondo'

 export default function Dashboard(params) {
    
    const {user}= useContext(UserContext)
     return(
        <section>
            <ParticlesFondo />
            <div>
                <div className="container custom-container box-dashboard">
                    <div className="pt-2 d-flex align-items-center gap-2 mt-5">
                        <div className="titulo-seccion">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="logo-seccion"></div>
                        <hr className='barra' />
                    </div>
                    <div className="configuracion">
                        <div className="box-left">

                        </div>
                        <div className="box-right">
                            
                        </div>
                    </div>

                    

                           
                </div>
            </div>
        </section>
     )
 }
