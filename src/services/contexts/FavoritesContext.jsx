import React, {createContext, useState, useEffect} from 'react';
import {storage} from 'services/storage';
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({children}) => {
  // [1, 2, 3, 4, 5]
  const [favorites, setFavorites] = useState(
    storage.exists('favorites') ? storage.getJson('favorites') : []
  );

  const toggleFavorite = (id) => {
    let newFavorites = [...favorites];
    let index = newFavorites.findIndex((item) => item === id);
    if (index > -1) {
      newFavorites.splice(index, 1);
    } else {
      newFavorites.push(id);
    }
    setFavorites(newFavorites);
    storage.set('favorites', JSON.stringify(newFavorites));
  }

  const isFavorite = (id) => {
    let index = favorites.findIndex((item) => item === id);
    return index > -1;
  }

  // useEffect(() => {
  //   if (storage.exists('favorites')) {
  //     setTimeout(() => {
  //     setFavorites(
  //       storage.getJson('favorites')
  //     );
  //     }, 1000);
  //   }
  // }, []);
  return (
    <FavoritesContext.Provider value={{
      favorites,
      isFavorite,
      toggleFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}