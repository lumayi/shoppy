import React, { useContext, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { useQuery } from '@tanstack/react-query';
import { getCartProducts } from '../api/product/products';
import Price from '../components/ui/Price';
import { UserContext } from '../context/UserContext';
import useCart from '../hooks/useCart';

export default function Cart() {
  const {
    userState: {
      user: { uid },
    },
  } = useContext(UserContext);
  const {
    cartQuery: { data: cartItems },
  } = useCart({ uid });

  useEffect(() => {}, [cartItems]);
  const total =
    cartItems &&
    Object.values(cartItems).reduce(
      (acc, current) => acc + parseInt(current.price * current.quantity),
      0
    );
  return (
    <>
      <div>
        <section className="flex flex-col gap-4 m-10 bg-stone-100 rounded-lg">
          <ul className="px-6 py-5 flex flex-col gap-4">
            {!cartItems && '장바구니가 비어있어요🛒'}
            {cartItems &&
              Object.values(cartItems).map((item) => (
                <li key={item.id}>
                  <CartItem item={item} />
                </li>
              ))}
          </ul>
        </section>
      </div>
      <div className="flex gap-5 mx-10 bg-stone-100 p-10 rounded-t-lg justify-between items-center">
        <Price text="상품금액" price={total ? total : 0} />
        <span className="font-bold text-3xl">+</span>
        <Price text="배송비" price={total ? '3000' : 0} />
        <span className="font-bold text-3xl">=</span>
        <Price text="총 합계" price={total ? total + 3000 : 0} isTotal />
      </div>
    </>
  );
}
