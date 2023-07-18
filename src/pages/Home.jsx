import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/product/products';

export default function Home() {
  const [products, setProducts] = useState();
  const loadProducts = async () => await getProducts();
  useEffect(() => {
    const items = loadProducts();
    console.log(items);
    setProducts(items);
  }, []);
  return (
    <section className="flex flex-col min-w-full desktop:max-w-[1240px] desktop:min-w-[1240px] gap-4">
      <div className="flex flex-col justify-center items-center p-10 h-56 bg-gradient-to-r from-purple-300 to-pink-500">
        <span className="text-3xl font-bold text-white">SHOP WITH US</span>
        <span className="text-white opacity-60">
          expand your styling experience
        </span>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 desktop:grid-cols-4 gap-4">
          {products &&
            Object.values(products).map((product) => (
              <div>
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
