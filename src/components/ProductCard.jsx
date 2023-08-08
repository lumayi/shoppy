import React from 'react';
import { useNavigate } from 'react-router-dom';
import { wonPrice } from '../util';

export default function ProductCard({
  product,
  product: { id, company, imageUrl, price, title },
}) {
  const navigate = useNavigate();
  return (
    <div
      key={id}
      className="hover:cursor-pointer hover:scale-105"
      onClick={() => navigate(`/products/${id}`, { state: { product } })}
    >
      <img src={imageUrl} alt="productImage" />
      <div className="flex flex-col justify-between px-2 my-3">
        <h1 className="font-semibold text-sm underline">{company}</h1>
        <p className="text-gray-800 text-sm truncate">{title}</p>
        <div className="flex items-center">
          <p className="font-semibold">{wonPrice(price)}</p>
          <p className="text-sm">원</p>
        </div>
      </div>
    </div>
  );
}
