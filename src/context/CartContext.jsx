import { createContext, useContext, useReducer, useState } from 'react';
import { addCart } from '../api/product/products';

const CartContext = createContext();

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOADITEMS':
      return { ...payload };
    case 'UPDATE':
      addCart(payload);
      return { ...state, ...payload };
    case 'WITHDRAW':
      delete state[payload.id];
      return { ...state };
    default:
      throw Error(`Unknown Type Error: ${type}`);
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {});
  useState(() => {
    const cartStorage = JSON.parse(localStorage.getItem('cart')) || {};
    dispatch({ type: 'LOADITEMS', payload: cartStorage });
  }, []);
  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
