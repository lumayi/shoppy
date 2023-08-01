import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/product/products';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      const items = await getProducts();
      setProducts(items);
    };
    loadProducts();
  }, []);
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col justify-center items-center p-10 h-56 bg-gradient-to-r from-purple-300 to-pink-500">
        <span className="text-3xl font-bold text-white">Gift Funding MoA</span>
        <span className="text-white opacity-60">
          expand your present experience
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
