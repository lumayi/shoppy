import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { wonPrice } from '../util';

export default function CartItem({ item }) {
  const { cartState, dispatch } = useCartContext();
  const { quantity, price, imageUrl, option, title } = item;
  const [quan, setQuan] = useState(quantity);
  return (
    <div className="flex gap-4 justify-between items-center">
      <div className="flex gap-4">
        <img src={imageUrl} alt="productImage" className="w-44" />
        <div className="flex flex-col mt-2">
          <h1 className="">{title}</h1>
          <div className="flex gap-2">
            <span>사이즈:</span>
            <span className="font-semibold">{option}</span>
          </div>
          <span>{wonPrice(price)}원</span>
        </div>
      </div>
      <div className="flex gap-2 mr-4">
        <button
          className="bg-gray-600 text-white w-6 h-6 flex justify-center items-center"
          type="button"
          onClick={() => {
            setQuan((prev) => {
              if (prev <= 1)
                return dispatch({
                  type: 'WITHDRAW',
                  payload: { id: item },
                });
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
  );
}
