import React from 'react';
import { getProducts } from '../api/product/products';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const navigate = useNavigate();
  const { data: products } = useQuery(['products'], () => getProducts(), {
    staleTime: 1000 * 60 * 60,
  });

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col justify-center items-center p-10 h-56 bg-gradient-to-r from-purple-300 to-pink-500">
        <span className="text-3xl font-bold text-white">Gift Funding MoA</span>
        <span className="text-white opacity-60">
          모두가 행복한 새로운 선물 경험
        </span>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 desktop:grid-cols-4 gap-4">
          {products &&
            products.map((product) => (
              <div
                key={product.id}
                className="hover:cursor-pointer"
                onClick={() =>
                  navigate(`/products/${product.id}`, { state: { product } })
                }
              >
                <img src={product.imageUrl} alt="productImage" />
                <div className="flex justify-between">
                  <h1>{product.title}</h1>
                  <p>{product.price}원</p>
                </div>
                <p>{product.gender}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
