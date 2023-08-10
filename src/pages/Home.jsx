import React from 'react';
import { getProducts } from '../api/product/products';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { data: products } = useQuery(
    ['products', 'home'],
    () => getProducts('home'),
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col justify-center items-center relative">
        <img
          src="https://res.cloudinary.com/dkjk8h8zd/image/upload/v1691495289/banner_ycjool.jpg"
          alt="banner"
          className="bg-image w-full object-cover h-96 bg-cover"
        />
        <div className="flex flex-col absolute top-36 text-center">
          <span className="text-3xl font-bold text-white">
            Gift Funding MoA
          </span>
          <span className="text-white opacity-60">
            모두가 행복한 새로운 선물 경험
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 desktop:grid-cols-4 gap-4">
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </section>
  );
}
