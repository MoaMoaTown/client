import { RecoilRoot, useRecoilValue } from 'recoil';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import ReactGA from 'react-ga4';
import { loginState } from './store/atoms';
import { NotiComponent } from './components';
import './styles/reset.css';

const queryClient = new QueryClient();
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

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
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID);
  }, []);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
