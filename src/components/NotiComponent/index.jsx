import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loginState, loginInfo } from '../../store/atoms';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import { NotiToast } from '../index';

/**
 * 알림 연결 컴포넌트
 * @author 임원정
 * @since 2024.09.06
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.06  	임원정        최초 생성
 * </pre>
 */

const NotiComponent = () => {
  const [notification, setNotification] = useState([]);
  const [toastOpen, setToastOpen] = useState(false);
  const login = useRecoilValue(loginState);
  const user = useRecoilValue(loginInfo);

  useEffect(() => {
    if (login.isLogin && user.hasTownId) {
      console.log(user.hasTownId);
      const EventSource = NativeEventSource || EventSourcePolyfill;
      const source = new EventSource(
        `http://${process.env.REACT_APP_ENDPOINT}/notification/subscribe/`,
        { withCredentials: true }
      );

      source.onopen = () => {
        console.log('SSE 연결 성공');
      };

      source.onmessage = (e) => {
        setNotification(e.data);
        setToastOpen(true);
      };

      source.addEventListener('error', function (e) {
        if (e) {
          console.log(e);
          source.close();
        }
      });
    }
  }, [login.isLogin, user.hasTownId]);
  return (
    <>
      {toastOpen && <NotiToast setToast={setToastOpen} text={notification} />}
    </>
  );
};

export default NotiComponent;
