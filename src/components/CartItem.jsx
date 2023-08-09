import React, { useState } from 'react';
import { wonPrice } from '../util';
import { FaTrash } from 'react-icons/fa';
import { deleteCartProduct, updateCartProduct } from '../api/product/products';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const buttonStyle =
  'bg-gray-500 text-white w-6 h-6 flex justify-center items-center rounded hover:bg-black hover:scale-105';
export default function CartItem({ item }) {
  const { quantity, price, imageUrl, option, title, id } = item;
  const queryClient = new useQueryClient();
  const deleteProduct = useMutation(
    (productId) => deleteCartProduct(productId),
    { onSuccess: () => queryClient.invalidateQueries(['cart']) }
  );
  const addProduct = useMutation(
    () => updateCartProduct({ ...item, quantity: quantity + 1 }),
    { onSuccess: () => queryClient.invalidateQueries(['cart']) }
  );
  const minusProduct = useMutation(
    () => updateCartProduct({ ...item, quantity: quantity - 1 }),
    { onSuccess: () => queryClient.invalidateQueries(['cart']) }
  );
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
      <div className="flex gap-4 mr-4 items-center">
        <div className="flex gap-2">
          <button
            className={buttonStyle}
            type="button"
            onClick={() => {
              if (quantity < 2) return;
              else return minusProduct.mutate();
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className={buttonStyle}
            type="button"
            onClick={addProduct.mutate}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="text-xl text-gray-400 hover:text-black hover:scale-110"
          onClick={() => deleteProduct.mutate(id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
