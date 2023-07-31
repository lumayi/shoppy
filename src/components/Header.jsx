import React, { useContext } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { login, logout } from '../api/login/auth';
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartStatus from './CartStatus';

export default function Header() {
  const { userState, dispatch } = useContext(UserContext);
  const { cartState } = useCartContext();
  const handleLogin = async () => {
    const { user } = await login();
    dispatch({ type: 'LOGIN', payload: user });
  };
  const handleLogout = async () => {
    logout();
    dispatch({ type: 'LOGOUT' });
  };
  const navigate = useNavigate();
  return (
    <header className="flex justify-between  h-12 items-center sticky top-0 bg-white">
      <Link to="/" className="ml-4 text-xl font-bold">
        SHOPPY
      </Link>
      <nav className="flex gap-3 mr-4 items-center">
        <button className="text-sm font-bold">Products</button>
        <CartStatus />
        {userState.user?.uid === process.env.REACT_APP_MASTER_UID && (
          <button type="button" onClick={() => navigate('/products/new')}>
            <AiOutlineFileAdd className="text-2xl" />
          </button>
        )}

        {userState.authenticated ? (
          <>
            <div className="flex gap-1 items-center">
              <img
                src={userState.user.photoURL || '/image/default-image.png'}
                alt="profile"
                className="w-7 rounded-full"
              />
              <p className="text-sm">{userState.user.displayName}</p>
            </div>
            <button
              className="bg-red-500 text-white text-sm py-1 px-2 rounded font-bold"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="bg-red-500 text-white text-sm py-1 px-2 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </nav>
    </header>
  );
}
