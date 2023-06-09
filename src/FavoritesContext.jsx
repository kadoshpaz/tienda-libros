/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const {user} = useContext(UserContext);

  const addFavorites = (product) => {
    setFavorites([...favorites, product]);
    
  };

  const deleteFavorites = (id) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorites, deleteFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;