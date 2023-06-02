import '../assets/css/busqueda.css'

export default function Buscar(params) {
    return(
        <>
            <div class="container-fluid p-0">
                <div className="my-box">
                    <div className="logo">
                        <p className='frase'>Mundo Infinito Libros</p>
                        <div className="mi-logo"></div>
                    </div>
                    <div className="busca">
                        <div class="input-group mb-3 input-group-lg">
                            <input type="text" className="form-control" placeholder="Ingrese búsqueda..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-warning" type="button" id="button-addon2">Buscar</button>
                        </div>
                    </div>
                    <div className="compras">
                        <div className="favoritos">
                            <div className="corazon"></div>
                            <div className="contenido">
                                <div className="cant">
                                    <p className='text-dark'>1</p>
                                </div>
                                <p className='text-carro'>WishList</p>
                            </div>
                        </div>
                        <div className="carro">
                            <div className="carrito"></div>
                            <div className="contenido">
                                <div className="cant new-color">
                                    <p>1</p>
                                </div>
                                <p className='text-carro'>Mi Carrito</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}