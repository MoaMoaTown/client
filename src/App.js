import { RecoilRoot, useRecoilValue } from 'recoil';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import { loginState } from './store/atoms';
import { NotiComponent } from './components';
import './styles/reset.css';

const queryClient = new QueryClient();

function AppContent() {
  const login = useRecoilValue(loginState);
  return (
    <>
      {login.isLogin && <NotiComponent />}
      <Router />
    </>
  );
}

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
