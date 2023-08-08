import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/product/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const { data: products } = useQuery(['products'], () => getProducts(), {
    staleTime: 1000 * 60 * 60,
  });
  return (
    <section className="flex flex-col gap-4 mt-4">
      <span className="text-center text-gray-800">
        모아는 성장중이예요! 더 많은 제품들을 가져올 수 있도록 노력할게요🥹
      </span>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </ul>
    </section>
  );
}
