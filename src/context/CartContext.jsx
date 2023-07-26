import { createContext, useContext, useReducer, useState } from 'react';

const CartContext = createContext();

const cartReducer = (state, { type, payload }) => {
  const { product, qunatity } = payload;
  switch (type) {
    case 'UPDATE':
      return { ...state, product: qunatity };
    case 'WITHDRAW':
      delete state[product];
      return { ...state };
    default:
      throw Error(`Unknown Type Error: ${type}`);
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {});
  useState(() => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
  }, []);
  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
