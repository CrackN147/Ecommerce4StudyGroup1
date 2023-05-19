import React, {createContext, useState, useEffect} from 'react';
import {storage} from 'services/storage';
export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState(
    storage.exists('cart') ? storage.getJson('cart') : []
  );
  const processCart = (data) => {
    storage.set('cart', JSON.stringify(data));
    setCart(data);
  }
  const checkIfProductIsInCart = (productId) => {
    if (storage.exists('cart')) {
      // localStorage.getItem('cart') !== null
      let index = cart.findIndex((item) => item.productId === productId);
      if (index > -1) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  const addProductToCart = (productId) => {
    if (storage.exists('cart')) {
      let copyCart = [...cart];
      copyCart.push({productId: productId, quantity: 1});
      // storage.set('cart', JSON.stringify(copyCart));
      processCart(copyCart);
    } else {
      // storage.set('cart', JSON.stringify(
      //   [{productId: productId, quantity: 1}]
      // ));
      processCart([{productId: productId, quantity: 1}]);
    }
  }
  const removeProductFromCart = (productId) => {
    let copyCart = [...cart];
    let index = copyCart.findIndex((item) => item.productId === productId);
    copyCart.splice(index, 1);
    // storage.set('cart', JSON.stringify(copyCart));
    processCart(copyCart);
  }
  const getQuantityOfProductInCart = (productId) => {
    let index = cart.findIndex((item) => item.productId === productId);
    if (index > -1) {
      return cart[index].quantity;
    } else {
      return 1;
    }
  }
  const changeQuantityOfProductInCart = (productId, quantity) => {
    let copyCart = [...cart];
    let index = copyCart.findIndex((item) => item.productId === productId);
    copyCart[index].quantity = parseInt(quantity);
    processCart(copyCart);
  }
  return (
    <CartContext.Provider value={{
      cart,
      addProductToCart,
      removeProductFromCart,
      checkIfProductIsInCart,
      getQuantityOfProductInCart,
      changeQuantityOfProductInCart
    }}>
      {children}
    </CartContext.Provider>
  )
}