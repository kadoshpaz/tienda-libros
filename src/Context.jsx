import { createContext, useState } from "react";
import { useEffect } from "react";

export const Context = createContext()
export const Consumer = Context.Consumer

export const Provider = ({ children }) => {
  const [libros, setLibros] = useState([]);

  const getLibros = async () => {
    const respuesta = await fetch('libros.json');
    const data = await respuesta.json();
    setLibros(data);
  }

  useEffect(() => {
    getLibros();
  }, []);

  const [carrito,setCarrito]= useState([]);

  const agregarLibro = (book)=>{
    const encuentraID = carrito.find(item => book.id === item.id);

    if (encuentraID) {

        const nuevoLibro = carrito.map(item => item.id === encuentraID.id ? {...book, cantidad: encuentraID.cantidad + 1}: item )
        return setCarrito(nuevoLibro);
    }
    setCarrito([...carrito, {...book, cantidad: 1}]);
  }

  const quitarLibro = (id) => {
    const nuevaLista = carrito.filter(item => item.id !== id);
    setCarrito(nuevaLista);
  }

  const actualizarLibro = (id, cantidad) => {
    const nuevaLista = carrito.map(item => {
      if (item.id === id) {
        return {...item, cantidad: cantidad};
      }
      return item;
    });
    setCarrito(nuevaLista);
  }

  const sumaTotalCompra = carrito.reduce((contador, valor) => valor.precio * valor.cantidad + contador, 0);

  const miTotal = carrito.reduce((total, libro) => total + libro.cantidad, 0);
  
  const estadoGlobal = {
    libros,
    carrito,
    agregarLibro,
    sumaTotalCompra,
    quitarLibro,
    actualizarLibro,
    miTotal
    
  }

  return <Context.Provider value={estadoGlobal}>{children}</Context.Provider>
}
