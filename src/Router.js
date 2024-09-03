import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Onboarding from './pages/Onboarding';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import JoinTown from './pages/JoinTown';
import Mypage from './pages/Mypage';
import Dept from './pages/Dept';
import Ranking from './pages/Ranking';
import Knowledge from './pages/Knowledge';
import Invest from './pages/Invest';
import Account from './pages/Account';
import ClosetEntry from './pages/ClosetEntry';
import Closet from './pages/Closet';
import SelectRole from './pages/SelectRole';
import Quest from './pages/Quest';
import JobMoa from './pages/JobMoa';
import AdminMain from './pages/AdminMain';

/**
 * 라우터
 * @author 이주현
 * @since 2024.08.20
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.20  	이주현        최초 생성
 * 2024.08.20   이주현        Onboarding, Main 추가
 * 2024.08.27   이주현        SignUp, Login 추가
 * 2024.08.28   이주현        JoinTown, Mypage, Ranking 추가
 * 2024.08.29   임재성        Dept 추가
 * 2024.08.30   임재성        Invest 추가
 * 2024.08.30   이주현        Knowledge, Account, SelectRole 추가
 * 2024.08.30   임원정        ClosetEntry 추가
 * 2024.09.01   이주현        Quest 추가
 * 2024.09.01   임원정        Closet 추가
 * 2024.09.02   임재성        JobMoa 추가
 * 2024.09.03   이주현        ProtectedRoute 추가
 * 2024.09.03   임원정        AdminMain 추가
 * </pre>
 */

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*누구나 접근 가능*/}
        <Route path='/' element={<Onboarding />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/select-role' element={<SelectRole />} />
        <Route path='/select-role' element={<SelectRole />} />

        {/*로그인한 사용자만 접근 가능*/}
        <Route
          path='/join-town'
          element={<ProtectedRoute element={<JoinTown />} />}
        />
        <Route path='/main' element={<ProtectedRoute element={<Main />} />} />
        <Route
          path='/mypage'
          element={<ProtectedRoute element={<Mypage />} />}
        />
        <Route path='/dept' element={<ProtectedRoute element={<Dept />} />} />
        <Route
          path='/rank'
          element={<ProtectedRoute element={<Ranking />} />}
        />
        <Route
          path='/knowledge'
          element={<ProtectedRoute element={<Knowledge />} />}
        />
        <Route
          path='/account'
          element={<ProtectedRoute element={<Account />} />}
        />
        <Route
          path='/closet-entry'
          element={<ProtectedRoute element={<ClosetEntry />} />}
        />
        <Route
          path='/closet'
          element={<ProtectedRoute element={<Closet />} />}
        />
        <Route
          path='/invest'
          element={<ProtectedRoute element={<Invest />} />}
        />
        <Route path='/quest' element={<ProtectedRoute element={<Quest />} />} />
        <Route
          path='/jobmoa'
          element={<ProtectedRoute element={<JobMoa />} />}
        />
        {/* <Route
          path='/admin'
          element={<ProtectedRoute element={<AdminMain />} requiredRole={1} />}
        /> */}
        <Route path='/admin' element={<AdminMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
