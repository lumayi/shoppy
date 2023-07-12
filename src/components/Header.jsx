import React from 'react';
import { AiOutlineShoppingCart, AiOutlineFileAdd } from 'react-icons/ai';

export default function Header() {
  return (
    <header className="flex justify-center sticky top-0">
      <div className="w-[420px] flex justify-between bg-red-200 h-12 items-center ">
        <span className="ml-4 text-sm font-bold">SHOPPY</span>
        <div className="flex gap-3 mr-4 items-center">
          <button type="button">
            <AiOutlineShoppingCart className="text-xl" />
          </button>
          <button type="button">
            <AiOutlineFileAdd className="text-lg" />
          </button>
          <button className="bg-red-500 text-white text-sm py-1 px-2 rounded">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
