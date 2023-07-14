import React, { useContext, useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineFileAdd } from 'react-icons/ai';
import { login, logout } from '../api/login/auth';
import { UserContext } from '../context/UserContext';

export default function Header() {
  const { userState, dispatch } = useContext(UserContext);
  const handleLogin = async () => {
    const { user } = await login();
    dispatch({ type: 'LOGIN', payload: user });
  };
  const handleLogout = async () => {
    logout();
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <header className="flex justify-between  h-12 items-center min-w-full laptop:min-w-[1240px] sticky top-0 bg-white">
      <span className="ml-4 text-xl font-bold">SHOPPY</span>
      <div className="flex gap-3 mr-4 items-center">
        <button className="text-sm font-bold">Products</button>
        <button type="button" className="relative">
          <AiOutlineShoppingCart className="text-2xl" />
          <div className="bg-red-700 absolute top-[-5px] right-[-5px] text-white rounded-full text-xs w-4 h-4">
            1
          </div>
        </button>
        {userState.user?.uid === 'ZmyIeTpVV6WPPICoMjjfRAt2g9e2' && (
          <button type="button">
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
      </div>
    </header>
  );
}
