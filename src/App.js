import { RecoilRoot, useRecoilValue } from 'recoil';
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
      {/* 로그인된 상태일 때만 알림 구독 */}
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
