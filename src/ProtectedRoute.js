import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { loginState, loginInfo } from './store/atoms';

/**
 * 페이지 이동 시 권한 확인 설정
 * @author 이주현
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  이주현      최초 생성
 * </pre>
 */

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
