import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../ProductContext';
import { UserContext } from '../UserContext';

const Update = () => {
    const {id} = useParams();
    const {products, updateProduct} = useContext(ProductContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const {user} = useContext(UserContext);

    useEffect(() => {
        const findProduct = products.find((item) => item.id === id);
        
        if (findProduct) {
          setTitle(findProduct.title);
          setDescription(findProduct.description);
          setPrice(findProduct.price);
          setImg(findProduct.img);
        } else {
          // Manejo del caso en el que no se encuentra ningún producto con el id dado
          console.log(`No se encontró ningún producto con el id ${id}`);
        }
      }, [id, products]);



    const handleSubmit = e =>{
        e.preventDefault();

         const newProduct = {
           id, 
           title,
           description,
           price,
           user: user.email,
           img,

         }
         updateProduct(newProduct);      
    }

  return (
    <div>
        <h1>Actualizar Producto</h1>

        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}></input>
          <input type='text' placeholder='Descripción' value={description} onChange={e => setDescription(e.target.value)}></input>
          <input type='text' placeholder='Precio' value={price} onChange={e => setPrice(e.target.value)}></input>
          <input type='text' placeholder='Imagen' value={img} onChange={e => setImg(e.target.value)}></input>
          <button type="submit">Actualizar</button>
        </form>

    </div>
  )
}

export default Update;