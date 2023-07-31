import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';

export default function CartItem({ item }) {
  const { cartState, dispatch } = useCartContext();
  const { quantity, price, imageUrl, option, title } = cartState[item];
  const [quan, setQuan] = useState(quantity);
  return (
    <div className="flex gap-4">
      <div>
        <img src={imageUrl} alt="productImage" className="w-44" />
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-lg">{title}</h1>
        <span>사이즈: {option}</span>
        <span>{price}원</span>
        <div className="flex gap-2">
          <button
            className="bg-gray-600 text-white w-6 h-6 flex justify-center items-center"
            type="button"
            onClick={() => {
              setQuan((prev) => {
                if (prev <= 1)
                  return dispatch({ type: 'WITHDRAW', payload: { id: item } });
                else return prev - 1;
              });
              dispatch({
                type: 'UPDATE',
                payload: { [item]: { quan, price, imageUrl, option, title } },
              });
            }}
          >
            -
          </button>
          <span>{quan}</span>
          <button
            className="bg-gray-600 text-white w-6 h-6 flex justify-center items-center"
            type="button"
            onClick={() => {
              setQuan((prev) => prev + 1);
              dispatch({
                type: 'UPDATE',
                payload: { [item]: { quan, price, imageUrl, option, title } },
              });
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
