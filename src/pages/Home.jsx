import '../assets/css/contenedor.css'
import Catalogo from '../components/catalogo'
import Footer from '../components/footer'

export default function Home(params) {
    return(
    <>


      <section className="container-fluid home-container">
        <Catalogo />
        <Footer />
      </section>
    </>
    )
}