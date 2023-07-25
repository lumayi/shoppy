import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Detail() {
  const {
    state: { product },
  } = useLocation();
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = () => {
    const cartItem = { productId: product.id, quantity };
    localStorage.setItem('cart', JSON.stringify(cartItem));
    if (
      window.confirm('장바구니에 추가되었습니다. 장바구니로 이동하시겠습니까?')
    )
      navigate('/cart');
  };
  return (
    <section className="flex justify-center mt-10 gap-4">
      <div className="flex-1">
        <img src={product.imageUrl} alt="product" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <span className="text-xl">{product.price}원</span>
        <span className="text-xl">{product.desc}</span>
        <label htmlFor="size-options">사이즈</label>
        <select
          name="options"
          id="size-options"
          className="w-40 border rounded"
        >
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
                if (prev === 0) return 0;
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
