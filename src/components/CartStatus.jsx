import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { getCartProducts } from '../api/product/products';
import { UserContext } from '../context/UserContext';

export default function CartStatus({ onClick }) {
  const { userState } = useContext(UserContext);
  const { data } = useQuery(['cart'], () =>
    getCartProducts(userState.user.uid)
  );
  return (
    <button type="button" className="relative" onClick={onClick}>
      <img src="image/cartImage.svg" alt="cart" className="w-6" />
      <div className="bg-red-700 absolute top-[-5px] right-[-5px] text-white rounded-full text-xs w-4 h-4">
        {!data && 0}
        {data && Object.keys(data).length}
      </div>
    </button>
  );
}
