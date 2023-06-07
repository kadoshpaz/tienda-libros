import { NavLink, useNavigate } from 'react-router-dom';
import '../assets/css/busqueda.css';
import { Context } from '../Context';
import { useContext, useState } from "react";
import { CatalogoContext } from '../BuscaContext';
import '../assets/css/search.css'


export default function Buscar(params) {

    
    const [searchText, setSearchText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { searchLibro } = useContext(CatalogoContext);

    const {sumaTotalCompra, miTotal}=useContext(Context);

    // const handleSearchButtonClick = () => {
    //     searchLibro(searchText);
    //     navigate('/filtrado');
    //   }
    const handleSearchButtonClick = () => {
        if (searchText.trim() !== '') {
          searchLibro(searchText);
          navigate('/filtrado');
          setSearchText('');
        } else {
          setErrorMessage('Por favor, ingrese un término de búsqueda');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000); 
        }
      };


    return(
        <>
            <div className="container-fluid p-0">
                <div className="my-box">
                    <div className="logo">
                        <p className='frase'><span>Mundo</span><span className='frase-uno'>Infinito</span><span className='frase-dos'>BOOKS</span></p>
                        <div className="mi-logo"></div>
                    </div>
                    <div className="busca">
                        <div className="input-group mb-3 input-group-lg">                           
                            <input type="text" className="form-control" placeholder="Ingrese búsqueda..." aria-label="Recipient's username" aria-describedby="button-addon2 " value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                            <button className="btn btn-warning" type="button" id="button-addon2" onClick={handleSearchButtonClick}>Buscar</button>                          
                        </div>
                        <div className='mensaje'>
                        {errorMessage && <p className="error-message" style={{color:'red'}}>{errorMessage}</p>}
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
                            <NavLink to='/carrito'>
                                <div className="carrito"></div>
                            </NavLink>
                            <div className="contenido">
                                <div className="cant new-color">
                                    <p>{miTotal}</p>
                                </div>
                                <p className='text-carro'>Mi Carrito</p>
                            </div>
                            <h3 style={{color:'#FF6D60', textShadow: "1px 1px 1px black" }}>${sumaTotalCompra.toLocaleString('es-CL')}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}