import '../assets/css/contenedor.css'
import Catalogo from '../components/catalogo'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Home(params) {
    return(
    <>


      
      <div className="mi-margen">
        <Header />
      </div>
      <section className="container-fluid home-container">
        <Catalogo />
        {/* <Footer /> */}
      </section>
    </>
    )
}