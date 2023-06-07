import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const CatalogoContext = createContext();

export const CatalogoProvider = ({ children }) => {
  const [searchBook, setSearchBooks] = useState([]);
  const [searchResults, setSearchResults] = useState('');

  const getBooks = async () => {
    const resp = await fetch('libros.json');
    const data = await resp.json();
    setSearchBooks(data);
  }



  useEffect(() => {
    getBooks();
  }, [])

  const searchLibro = (titulo) => {
    let filteredBook = searchBook.find(item => item.titulo.toLowerCase()===titulo.toLowerCase());

    console.log(filteredBook);
    
     if(filteredBook===undefined || filteredBook===null || filteredBook===''){
        console.log('Esta movía está vacía');
        filteredBook=undefined;
     }
     console.log(filteredBook);
    setSearchResults(filteredBook);
  }
  

  return (
    <CatalogoContext.Provider value={{ searchResults, searchLibro }}>
      {children}
    </CatalogoContext.Provider>
  );
};
