import { createContext, useContext, useReducer, useState } from 'react';
import { authUser, login, logout } from '../api/login/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export const UserContext = createContext();

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return { ...state, authenticated: true, user: payload };
    case 'LOGOUT':
      return { ...state, authenticated: false, user: null };
    case 'STOP_LOADING':
      return { ...state, isLoading: false };
    default:
      throw Error(`Unknown Type Error: ${type}`);
  }
};

export const UserContextProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, {
    isLoading: true,
    authenticated: false,
    user: null,
  });
  useState(() => {
    const auth = getAuth();
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch({ type: 'LOGIN', payload: user });
        } else {
          dispatch({ type: 'LOGOUT' });
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: 'STOP_LOADING' });
    }
  }, []);
  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
