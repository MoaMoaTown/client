import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../store/atoms';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import { NotiToast } from '../index';

const NotiComponent = () => {
  const [notification, setNotification] = useState([]);
  const [toastOpen, setToastOpen] = useState([]);
  const [eventSource, setEventSource] = useState(null);
  const login = useRecoilValue(loginState);

  useEffect(() => {
    if (login.isLogin) {
      console.log('구독 시도');
      const EventSource = NativeEventSource || EventSourcePolyfill;
      const source = new EventSource(
        `http://${process.env.REACT_APP_ENDPOINT}/notification/subscribe/`,
        { withCredentials: true }
      );

      source.onopen = () => {
        console.log('SSE 연결 성공');
      };

      source.onmessage = (e) => {
        console.log(e.data);
        // if (e.type === 'message' && e.data.startsWith('{')) {
        setNotification(e.data);
        setToastOpen(true); // 알림을 띄워주는 state
        // }
      };

      source.addEventListener('error', function (e) {
        if (e) {
          console.log(e);
          source.close(); // 에러가 발생시 닫아줌
        }
      });
    }
  }, [login.isLogin]);
  return (
    <>
      {toastOpen && <NotiToast setToast={setToastOpen} text={notification} />}
    </>
  );
};

export default NotiComponent;
