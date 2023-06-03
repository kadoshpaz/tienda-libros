import '../assets/css/footer.css'


export default function Footer(params) {
    return(
        <>
        <footer className="container-fluid footer-container">
            <div className="row p-5 bg-dark text-white">
                <div className="row contenido-footer">
                <div className="col-xs-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center">
                    <div className="logo-books"></div>                              
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <p className='text-footer h4'>Contacto</p>
                    <hr />
                    <p> <span className='mi-color fw-bold'>Email:</span> contacto@mundoinfinitobooks.cl</p>
                    <p className='mi-color fw-bold'>Teléfonos:</p>
                    <ul className='lista-footer'>
                        <li>+56 9 99457836</li>
                        <li>+56 9 35698741</li>
                        <li>+56 9 55557412</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <p className='text-footer h4'>Horarios</p>
                    <hr />
                    <p className='mb-1 fw-bold mi-color'>Tienda Mall Plaza El Trébol:</p>
                    <p>Lunes a Viernes de 10:00 a 18:00 h.</p>
                    <p className='mb-1 fw-bold mi-color'>Tienda Concepción Centro:</p>
                    <p>Lunes a Viernes de 10:00 a 18:00 h.</p>
                    <p className='mb-1 fw-bold mi-color'>Servicio al cliente:</p>
                    <p>Lunes a Viernes de 09:00 a 18:00 h.</p>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <p className='text-footer h4'>Dirección</p>
                    <hr />
                    <p className='mb-1 fw-bold mi-color'>Tienda MallPlaza El Trébol:</p>
                    <p>Avenida Jorge Alessandri 3177, Concepción</p>
                    <p className='mb-1 fw-bold mi-color'>Tienda Concepción Centro:</p>
                    <p>Barros Arana N°1068, 4070053 Concepción, Bío Bío</p>
                </div>
                </div>
                <div className="container-fluid d-flex justify-content-center col-xs-12 col-md-6 col-lg-3">
                    <p className='text-center'><span className='h5 derechos'>PazTechWeb</span> - <span className='text-warning'>Todos los derechos reservados</span> <span className='mi-color'>&copy; 2023</span></p>
                </div>
            </div>
        </footer>       
        </>
    )
}