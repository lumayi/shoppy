import React from 'react';
import { useCartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { cartState } = useCartContext();
  const total = Object.values(cartState).reduce(
    (acc, current) => acc + parseInt(current.price),
    0
  );
  return (
    <section className="flex flex-col gap-4">
      {Object.keys(cartState).map((item) => (
        <CartItem item={item} key={item} />
      ))}
      <div className="flex gap-5">
        <div className="bg-pink-500 text-white">{total}</div>
        <div className="bg-pink-500 text-white">+ 배송비 3000원</div>
        <div className="bg-pink-500 text-white">총 합계: {total + 3000}</div>
      </div>
    </section>
  );
}
