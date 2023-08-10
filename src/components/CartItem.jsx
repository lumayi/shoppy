import React from 'react';
import { wonPrice } from '../util';
import { FaTrash } from 'react-icons/fa';
import useCart from '../hooks/useCart';

const buttonStyle =
  'bg-gray-500 text-white w-6 h-6 flex justify-center items-center rounded hover:bg-black hover:scale-105';
export default function CartItem({ item }) {
  const { quantity, price, imageUrl, option, title, id } = item;
  const { deleteQuery } = useCart();
  const { updateQuery } = useCart();
  return (
    <div className="flex gap-4 justify-between items-center border p-4">
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
      <div className="flex gap-4 mr-4 items-center">
        <div className="flex gap-2">
          <button
            className={buttonStyle}
            type="button"
            onClick={() => {
              if (quantity < 2) return;
              else return updateQuery.mutate({ type: 'minus', item });
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className={buttonStyle}
            type="button"
            onClick={() => updateQuery.mutate({ type: 'add', item })}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="text-xl text-gray-400 hover:text-black hover:scale-110"
          onClick={() => deleteQuery.mutate(id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
