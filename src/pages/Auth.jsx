import React, { useContext, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  const { userState, dispatch } = useContext(UserContext);
  useEffect(() => {
    dispatch({ type: 'LOGIN', payload: { uid: accessToken } });
    // window.close();
    console.log(accessToken);
  }, [accessToken, dispatch]);
  return <>{console.log(userState)}</>;
}
