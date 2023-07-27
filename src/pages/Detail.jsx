import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export default function Detail() {
  const {
    state: { product },
  } = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState('');
  const { price, title, desc, imageUrl, id } = product;
  const navigate = useNavigate();
  const { cartState, dispatch } = useCartContext();
  const handleSubmit = () => {
    const cartItem = { [id]: { quantity, price, option, imageUrl, title } };
    dispatch({ type: 'UPDATE', payload: cartItem });
    localStorage.setItem('cart', JSON.stringify(cartState));
    if (
      window.confirm('장바구니에 추가되었습니다. 장바구니로 이동하시겠습니까?')
    )
      navigate('/cart');
  };
  return (
    <section className="flex justify-center mt-10 gap-4">
      <div className="flex-1">
        <img src={imageUrl} alt="product" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span className="text-xl">{price}원</span>
        <span className="text-xl">{desc}</span>
        <label htmlFor="size-options">사이즈</label>
        <select
          name="options"
          id="size-options"
          className="w-40 border rounded"
          onChange={(e) => setOption(e.target.value)}
        >
          <option value={''}>사이즈 선택</option>
          {product.options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-2">
          <button
            className="bg-gray-600 text-white w-6 h-6 flex justify-center items-center"
            type="button"
            onClick={() =>
              setQuantity((prev) => {
                if (prev === 1) return 1;
                else return prev - 1;
              })
            }
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="bg-gray-600 text-white w-6 h-6 flex justify-center items-center"
            type="button"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
          <button
            type="button"
            className="bg-pink-500 text-white rounded px-2"
            onClick={handleSubmit}
          >
            장바구니에 추가
          </button>
        </div>
      </div>
    </section>
  );
}
