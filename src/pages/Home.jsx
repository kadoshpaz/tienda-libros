 import '../assets/css/contenedor.css';
 import Catalogo from '../components/catalogo';

 export default function Home(params) {
     return(
     <>  
       <section className="container-fluid home-container">
         <Catalogo />
       </section>
     </>
     )
 }
