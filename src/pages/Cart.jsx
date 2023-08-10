import React from 'react';
import CartItem from '../components/CartItem';
import Price from '../components/ui/Price';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const {
    cartQuery: { data: cartItems },
  } = useCart();
  const total =
    cartItems &&
    Object.values(cartItems).reduce(
      (acc, current) => acc + parseInt(current.price * current.quantity),
      0
    );
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-[30rem]">
        <section className="flex flex-col gap-4 m-10 bg-stone-100 rounded-lg">
          <ul className="px-6 py-5 flex flex-col gap-4">
            {!Object.keys(cartItems).length && '장바구니가 비어있어요 🛒'}
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
        <Price text="총 주문 금액" price={total ? total : 0} />
        <span className="font-bold text-3xl bg-black text-white w-10 h-10 text-center rounded-full">
          +
        </span>
        <Price text="배송비" price={total ? '3000' : 0} />
        <span className="font-bold text-3xl bg-black text-white w-10 h-10 text-center rounded-full">
          =
        </span>
        <Price text="총 결제금액" price={total ? total + 3000 : 0} isTotal />
      </div>
      <div className="flex justify-center gap-10 mt-10 text-xl font-semibold">
        <button
          className="bg-white px-10 py-4 rounded text-gray-700"
          onClick={() => navigate('/products')}
        >
          계속 쇼핑하기
        </button>
        <button
          className="bg-blue-500 px-10 py-4 rounded text-white"
          onClick={() => alert('준비중입니다.')}
        >
          구매하기
        </button>
      </div>
    </>
  );
}
