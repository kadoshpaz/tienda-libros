import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../Context';
// import { ProductContext } from '../ProductContext';
import { UserContext } from '../UserContext';
import {NavLink} from 'react-router-dom'
import ParticlesFondo from '../components/particlesFondo';

const Update = () => {
    const {id} = useParams();
    const {libros, updateProduct} = useContext(Context);
    const {user} = useContext(UserContext);

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [precio, setPrecio] = useState("");
    const [editorial, setEditorial] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [tipo, setTipo] = useState("");

    useEffect(() => {
        const findProduct = libros.find((item) => item.id === id);
        
        if (findProduct) {
          setTitulo(findProduct.titulo);
          setDesc(findProduct.desc);
          setPrecio(findProduct.precio);
          setImg(findProduct.img);
          setAutor(findProduct.autor);
          setEditorial(findProduct.editorial);
          setTipo(findProduct.tipo)
        } else {
          // Manejo del caso en el que no se encuentra ningún producto con el id dado
          console.log(`No se encontró ningún producto con el id ${id}`);
        }
      }, [id, libros]);



    const handleSubmit = e =>{
        e.preventDefault();

        const newProduct = {
          id: id,
          titulo,
          autor,
          precio,
          user: user.email,
          editorial,
          desc,
          img,
          tipo
        };

         updateProduct(newProduct);
         console.log("editado");      
    }

  return (
    <section>
    <ParticlesFondo /> 

    <div className="container custom-container box-dashboard">
        <div className="pt-2 d-flex align-items-center gap-2 mt-2">
            <div className="titulo-seccion">
                <h1>Actualizar</h1>
            </div>
            <div className="logo-seccion"></div>
            <hr className='barra' />
        </div>
        <div className="d-flex justify-content-center">
            <div className="configuracion">
                <div className="box-left">                   
                    <div className='box-dash d-flex align-items-center justify-content-center'>
                    <NavLink to='/dashboard/profile' className='no-decoracion d-flex align-items-center'>    
                        <div className="icon-userD">                                        
                        </div>
                        <h5 className='px-2'>Editar Perfil</h5>
                    </NavLink>                               
                    </div>
                
                    <div className='box-dash d-flex align-items-center justify-content-center'>
                        <div className="icon-favorite">                                        
                        </div>
                        <h5 className='px-2'>Mis Favoritos</h5>
                    </div>

                    <div className='box-dash d-flex align-items-center justify-content-center'>
                        <NavLink to='/dashboard/agregar_libro' className='no-decoracion d-flex align-items-center'>   
                            <div className="icon-publicar">                                        
                            </div>
                            <h5 className='px-2'>Agregar Libro</h5>
                        </NavLink>    
                    </div>

                    <div className='box-dash d-flex align-items-center justify-content-center'>
                        <NavLink to='/dashboard/publicaciones' className='no-decoracion d-flex align-items-center'>
                            <div className="icon-publicacion">                                        
                            </div>
                            <h5 className='px-2'>Mis Publicaciones</h5>
                        </NavLink>
                    </div>
                </div>
                <div className="box-right">
                    <div className="form-register d-flex justify-content-center align-items-center flex-column mt-5">
                        <div className="d-flex mb-2 align-items-center justify-content-center">
                            <div className="icono-register">
                                <i className="fa-solid fa-book fa-sm"></i>
                            </div>
                            <h4 className='mx-3 pb-3'>Actualizar Libro </h4>
                        </div>
                        <div className="card p-5 box-agregar shadow-lg">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 input-container">
                                    <i className="fa-solid fa-id-card fa-xl"></i>
                                    <input type="text" className="form-control" placeholder="Titulo" value={titulo} onChange={e => setTitulo(e.target.value)} />                 
                                </div>
                                <div className="mb-3 input-container">
                                    <i className="fa-solid fa-id-card fa-xl"></i>
                                    <input type="text" className="form-control" placeholder="Autor" value={autor} onChange={e => setAutor(e.target.value)}/>
                                </div>
                                <div className="mb-3 input-container">
                                    <i className="fa-solid fa-dollar-sign fa-xl"></i>
                                    <input type="number" className="form-control" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)}/>
                                </div>
                                <div className="mb-3 input-container">
                                    <i className="fa-solid fa-newspaper fa-xl"></i>
                                    <input type="text" className="form-control" placeholder="Editorial" value={editorial} onChange={e => setEditorial(e.target.value)}/>
                                </div>
                                <div className="mb-3 input-container">
                                    <i className="fa-solid fa-link fa-xl"></i>
                                    <input type="text" className="form-control" placeholder="URL de Imagen" value={img} onChange={e => setImg(e.target.value)}/>
                                </div>
                                <div className="mb-3 input-container">
                                    <select class="form-select" aria-label="Default select example" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                                        <option selected>Seleccione Género Literario</option>
                                        <option value="fantastica">fantastica</option>
                                        <option value="infantil">Infantil</option>
                                    </select>                                            
                                </div>
                                <div className="mb-3 input-container">
                                    <div class="form-floating ">
                                        <textarea class="form-control" placeholder="Descripción" id="floatingTextarea2" style={{height: '100px'}} value={desc} onChange={e => setDesc(e.target.value)}
                                        >
                                        Ingrese una Descripción    
                                        </textarea>
                                    </div>                                            
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-outline-warning btn-lg text-dark">Actualizar Libro  <i className="fa-regular fa-square-check fa-xl"></i></button>
                                </div>
                            </form>
                        </div>
                        <div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>  
    </div>    
</section>
  )
}

export default Update;