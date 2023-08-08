import React, { useContext } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { login, logout } from '../api/login/auth';
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartStatus from './CartStatus';
import User from './User';
import Button from './ui/Button';

export default function Header() {
  const { userState } = useContext(UserContext);
  const { cartState } = useCartContext();
  const navigate = useNavigate();

  return (
    <header className="flex justify-between h-14 items-center sticky top-0 z-10 bg-stone-200 px-2 border-b-2 border-gray-300">
      <Link
        to="/"
        className="text-2xl font-bold flex items-center gap-1 outline-none"
      >
        <span>MoA</span>
        <img
          src="https://res.cloudinary.com/dkjk8h8zd/image/upload/v1691495130/present-unscreen_gd0ziu.gif"
          alt="moa-logo"
          className="w-9"
        />
      </Link>
      <nav className="flex gap-3 items-center">
        <span
          className="font-semibold hover:cursor-pointer hover:opacity-60"
          onClick={() => navigate('/products')}
        >
          PRODUCTS
        </span>
        {userState.authenticated && (
          <CartStatus
            cartStatus={Object.keys(cartState).length}
            onClick={() => navigate('/cart')}
          />
        )}
        {userState.user?.isAdmin && (
          <button type="button" onClick={() => navigate('/products/new')}>
            <AiOutlineFileAdd className="text-2xl" />
          </button>
        )}
        {userState.authenticated && <User user={userState.user} />}
        {userState.authenticated && <Button onClick={logout} text="로그아웃" />}
        {!userState.authenticated && <Button onClick={login} text="로그인" />}
      </nav>
    </header>
  );
}
