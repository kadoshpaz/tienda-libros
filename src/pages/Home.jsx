import '../assets/css/contenedor.css';
import Catalogo from '../components/catalogo';
import Header from '../components/header';

export default function Home(params) {
    return(
    <>


      
      <div className="mi-margen">
        <Header />
      </div>
      <section className="container-fluid home-container">
        <Catalogo />
      </section>
    </>
    )
}