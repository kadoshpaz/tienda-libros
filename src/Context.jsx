import { createContext, useState } from "react";
import React, { useEffect } from "react";

export const Context = createContext()
export const Consumer = Context.Consumer

const initialProductState = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')): [];

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

  useEffect(()=>{
      if (libros.length !==0) { 
          getLibros();
      }       
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{
      localStorage.setItem('products', JSON.stringify(libros))
  }, [libros])

  const createProduct = mBook =>{
      console.log(mBook);
      setLibros([mBook,...libros]);
  }

  const deleteProduct = id =>{
    console.log(id);
      const newProducts = libros.filter(item => item.id !== id);
      console.log(newProducts);
      setLibros(newProducts);
  }

  const updateProduct = newBook =>{
      const newBooks = libros.map(myBook =>{
          if (myBook.id === newBook.id) {
              return newBook;
          }
          return myBook;
      })
      setLibros(newBooks);
  }
  //--------------------------------------------------------------------------------------------

  const sumaTotalCompra = carrito.reduce((contador, valor) => valor.precio * valor.cantidad + contador, 0);

  const miTotal = carrito.reduce((total, libro) => total + libro.cantidad, 0);
  
  const estadoGlobal = {
    libros,
    carrito,
    agregarLibro,
    sumaTotalCompra,
    quitarLibro,
    actualizarLibro,
    miTotal,
    createProduct,
    deleteProduct,
    updateProduct,
    getLibros
    
  }


  return <Context.Provider value={estadoGlobal}>{children}</Context.Provider>
}
