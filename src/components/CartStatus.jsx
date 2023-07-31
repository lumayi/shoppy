import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CartStatus() {
  return (
    <button type="button" className="relative">
      <img src="image/cartImage.svg" alt="cart" className="w-6" />
      <div className="bg-red-700 absolute top-[-5px] right-[-5px] text-white rounded-full text-xs w-4 h-4">
        {}
      </div>
    </button>
  );
}
