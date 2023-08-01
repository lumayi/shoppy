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
    <header className="flex justify-between  h-12 items-center sticky top-0 bg-white">
      <Link to="/" className="ml-4 text-xl font-bold">
        MoA
      </Link>
      <nav className="flex gap-3 mr-4 items-center">
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
