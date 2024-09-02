import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
 * 2024.09.02   임재성        JobMoa 추가
 * </pre>
 */

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/main' element={<Main />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join-town' element={<JoinTown />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/dept' element={<Dept />} />
        <Route path='/rank' element={<Ranking />} />
        <Route path='/knowledge' element={<Knowledge />} />
        <Route path='/account' element={<Account />} />
        <Route path='/closet-entry' element={<ClosetEntry />} />
        <Route path='/closet' element={<Closet />} />
        <Route path='/select-role' element={<SelectRole />} />
        <Route path='/invest' element={<Invest />} />
        <Route path='/quest' element={<Quest />} />
        <Route path='/jobmoa' element={<JobMoa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
