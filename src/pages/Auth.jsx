import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Auth() {
  const { userId, accessToken } = useParams();
  const { userState, dispatch } = useContext(UserContext);
  useEffect(() => {
    dispatch({ type: 'LOGIN', payload: { user: { userId, accessToken } } });
    window.close();
  }, []);
  return <></>;
}
