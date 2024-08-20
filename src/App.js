import { RecoilRoot } from 'recoil';
import Router from './Router';

import './styles/reset.css';

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
