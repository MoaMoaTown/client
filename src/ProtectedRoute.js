import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { loginState, loginInfo } from './store/atoms';

const ProtectedRoute = ({ element, requiredRole }) => {
  const loginStateValue = useRecoilValue(loginState);
  const loginInfoValue = useRecoilValue(loginInfo);

  if (!loginStateValue.isLogin) {
    return <Navigate to='/login' />;
  }

  if (requiredRole && loginInfoValue.role !== requiredRole) {
    return <Navigate to='/' />;
  }

  return element;
};

export default ProtectedRoute;
