import { RecoilRoot } from 'recoil';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import ReactGA from 'react-ga4';

import './styles/reset.css';

const queryClient = new QueryClient();
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

function App() {
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID);
  }, []);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
