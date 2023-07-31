import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

export default function PrivateRouter({ children, isAdmin }) {
  const { userState } = useContext(UserContext);

  if (!userState.user || (!userState.user.isAdmin && isAdmin))
    return <Navigate to={'/'} replace />;
  return children;
}
