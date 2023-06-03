import '../assets/css/catalogo.css'
import '../assets/css/titulos.css'
import bookImage from '../assets/img/book.jpg';
import '../assets/css/contenedor.css'

export default function Catalogo(params) {
    return(
        <div className="container custom-container">
            <div className="catalogo pt-5 d-flex align-items-center gap-2">
                <div className="titulo-catalogo">
                    <h1>Catálogo</h1>
                </div>
                <hr className='barra' />
            </div>
            <div className="contenedor pt-5 grid-container">
                <div className="card">
                    <img src={bookImage} alt="" />
                    <h4>Ejemplo</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis qui? Mollitia exercitationem dicta quaerat.</p>
                    <a href="http://">Leer más</a>
                </div>
                <div className="card">
                    <img src={bookImage} alt="" />
                    <h4>Ejemplo</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis qui? Mollitia exercitationem dicta quaerat.</p>
                    <a href="http://">Leer más</a>
                </div>
                <div className="card">
                    <img src={bookImage} alt="" />
                    <h4>Ejemplo</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis qui? Mollitia exercitationem dicta quaerat.</p>
                    <a href="http://">Leer más</a>
                </div>
                <div className="card">
                    <img src={bookImage} alt="" />
                    <h4>Ejemplo</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis qui? Mollitia exercitationem dicta quaerat.</p>
                    <a href="http://">Leer más</a>
                </div>
                <div className="card">
                    <img src={bookImage} alt="" />
                    <h4>Ejemplo</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis qui? Mollitia exercitationem dicta quaerat.</p>
                    <a href="http://">Leer más</a>
                </div>
                <div className="card">
                    <img src={bookImage} alt="" />
                    <h4>Ejemplo</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis qui? Mollitia exercitationem dicta quaerat.</p>
                    <a href="http://">Leer más</a>
                </div>
                <div className="card">
                    <img src={bookImage} alt="" />
                    <h4>Ejemplo</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis qui? Mollitia exercitationem dicta quaerat.</p>
                    <a href="http://">Leer más</a>
                </div>
                <div className="card">
                    <img src={bookImage} alt="" />
                    <h4>Ejemplo</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis qui? Mollitia exercitationem dicta quaerat.</p>
                    <a href="http://">Leer más</a>
                </div>
                <div className="card">
                    <img src={bookImage} alt="" />
                    <h4>Ejemplo</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis qui? Mollitia exercitationem dicta quaerat.</p>
                    <a href="http://">Leer más</a>
                </div>
                <div className="card">
                    <img src={bookImage} alt="" />
                    <h4>Ejemplo</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis qui? Mollitia exercitationem dicta quaerat.</p>
                    <a href="http://">Leer más</a>
                </div>
            </div>
        </div>
    )
}