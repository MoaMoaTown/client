import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Onboarding from './pages/Onboarding';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import JoinTown from './pages/JoinTown';
import Mypage from './pages/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join-town" element={<JoinTown />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
