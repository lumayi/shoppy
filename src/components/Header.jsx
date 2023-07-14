import React, { useContext } from 'react';
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
    <header className="flex justify-center sticky top-0">
      <div className="w-[420px] flex justify-between bg-red-200 h-12 items-center ">
        <span className="ml-4 text-sm font-bold">SHOPPY</span>
        <div className="flex gap-3 mr-4 items-center">
          <button type="button">
            <AiOutlineShoppingCart className="text-xl" />
          </button>
          <button type="button">
            <AiOutlineFileAdd className="text-lg" />
          </button>
          {userState.authenticated ? (
            <button
              className="bg-yellow-500 text-white text-sm py-1 px-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-red-500 text-white text-sm py-1 px-2 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
