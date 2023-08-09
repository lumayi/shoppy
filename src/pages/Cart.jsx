import React from 'react';
import { useCartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { useQuery } from '@tanstack/react-query';
import { getCartProducts } from '../api/product/products';
import Price from '../components/ui/Price';

export default function Cart() {
  const { data: cartItems } = useQuery(['cart'], () => getCartProducts());
  const total =
    cartItems &&
    Object.values(cartItems).reduce(
      (acc, current) => acc + parseInt(current.price),
      0
    );
  return (
    <>
      <section className="flex flex-col gap-4 m-10 bg-stone-100 rounded-lg">
        <ul className="px-6 py-5 flex flex-col gap-4">
          {cartItems &&
            Object.values(cartItems).map((item) => (
              <li key={item.id}>
                <CartItem item={item} />
              </li>
            ))}
        </ul>
      </section>
      <div className="flex gap-5 mx-10 bg-stone-100 p-10 rounded-t-lg justify-between items-center">
        <Price text="상품금액" price={total} />
        <span className="font-bold text-3xl">+</span>
        <Price text="배송비" price="3000" />
        <span className="font-bold text-3xl">=</span>
        <Price text="총 합계" price={total + 3000} isTotal />
      </div>
    </>
  );
}
