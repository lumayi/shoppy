import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

export default function PrivateRouter({ children }) {
  const { userState } = useContext(UserContext);

  return userState.authenticated ? children : <Navigate to={'/'} replace />;
}
