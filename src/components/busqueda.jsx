import '../assets/css/busqueda.css'

export default function Buscar(params) {
    return(
        <>
            <div class="container-fluid p-0">
                <div className="my-box">
                    <div className="logo">
                        <p>Mundo Infinito Libros</p>
                        <div className="mi-logo"></div>
                    </div>
                    <div className="busca">
                        <form class="d-flex" role="search">
                        <input class="form-control form-control-lg me-2" type="search" placeholder="Ingrese búsqueda..." aria-label="Search" />
                            <button class="btn btn-outline-dark btn-lg" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}