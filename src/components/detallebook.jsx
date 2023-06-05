import '../assets/css/contenedor.css';
import '../assets/css/titulos.css';
import '../assets/css/detallebook.css';
import '../assets/css/catalogo.css';
import { NavLink} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";


export default function DetalleBook({ idLibro }) {

    // const params=useParams();
    const {libros}=useContext(Context);
    
    const getLibroById = (id) => libros.find(librito => librito.id ===idLibro);

    const myBook=getLibroById(idLibro.id);

    let categoria= '';

    categoria= (myBook.tipo==='fantastica') ? 'Ciencia Ficción': 'Infantil';

    return(
        <>
        <section className=''>
            <div className="container custom-container detalle">
                <div className="catalogo pt-5 d-flex align-items-center gap-2">
                        <div className="titulo-seccion">
                            <h1>Detalle</h1>
                        </div>
                        <div className="logo-seccion"></div>

                        <hr className='barra' />
                </div>
                <div className="card-horizontal">
                    <div className="card mb-3 shadow" style={{ height: "450px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={myBook.img} className="img-fluid rounded-start" alt="Book Cover" style={{ objectFit: "cover", height: "448px", width: "350px" }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{myBook.titulo}</h3>
                                    <hr />
                                    <h6>Reseña</h6>
                                    <p className="card-text">{myBook.desc}</p>
                                    <p className="card-text mb-1"><small className="text-muted"><b>Autor:</b> {myBook.autor}</small></p>
                                    <p className="card-text mb-1"><small className="text-muted"><b>Editorial:</b> {myBook.editorial}</small></p>
                                    <p className="card-text mb-1"><small className="text-muted"><b>Categoría:</b> {categoria}</small></p>
                                    <h1 className="card-text mb-1"><span className="text-muted"><span style={{color:'#1B9C85'}}>Precio:</span> <b><span style={{color:'#FF6D60'}}>${myBook.precio.toLocaleString('es-CL')}</span></b></span></h1>
                                    <div className="btn-volver my-3">
                                        <NavLink to="/" className="d-grid btn-no-underline">
                                            <button type="button" className="btn btn-outline-warning text-dark mb-5" style={{ width: 'fit-content' }}>
                                                Volver al Catálogo
                                            </button>
                                        </NavLink>
                                    </div>                                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}