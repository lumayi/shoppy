import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { wonPrice } from '../util';
import Button from '../components/ui/Button';
import { UserContext } from '../context/UserContext';

export default function Detail() {
  const {
    state: {
      product,
      product: { price, title, desc, imageUrl, gender, options },
    },
  } = useLocation();
  const [option, setOption] = useState(options && options[0]);
  const navigate = useNavigate();
  const { dispatch } = useCartContext();
  const { userState } = useContext(UserContext);
  const handleSubmit = () => {
    const cartItem = { ...product, quantity: 1, option };
    if (userState.user) {
      dispatch({ type: 'UPDATE', payload: cartItem });
      if (
        window.confirm(
          '장바구니에 추가되었습니다. 장바구니로 이동하시겠습니까?'
        )
      )
        return navigate('/cart');
    } else return alert('로그인이 필요합니다.');
  };
  return (
    <>
      <p className="mt-4 mx-10 text-sm">{gender}</p>
      <section className="flex flex-col md:flex-row gap-5 px-10 mt-4">
        <div className="basis-1/2">
          <img src={imageUrl} alt={title} className="w-full" />
        </div>
        <div className="basis-1/2 flex flex-col gap-3 border-t-2 border-black px-4">
          <h1 className="font-semibold text-xl mt-4">{title}</h1>
          <div className="flex items-center border-b border-black border-opacity-10">
            <span className="font-bold text-xl">{wonPrice(price)}</span>
            <span>원</span>
          </div>
          <span className="text-sm">{desc}</span>
          <div className="flex items-center gap-2">
            <label htmlFor="size-options" className="text-sm">
              사이즈
            </label>
            <select
              name="options"
              id="size-options"
              className="w-fit border rounded outline-none bg-transparent border-cyan-700 px-2 py-1"
              onChange={(e) => setOption(e.target.value)}
            >
              {options &&
                options.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
            </select>
          </div>
          <Button
            text="장바구니 담기"
            className="bg-pink-500 text-white rounded px-2"
            onClick={handleSubmit}
          />
        </div>
      </section>
    </>
  );
}
