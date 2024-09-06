import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../store/atoms';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const NotiComponent = () => {
  const [notifications, setNotifications] = useState([]);
  const [alertOpen, setAlertOpen] = useState([]);
  const [eventSource, setEventSource] = useState(null);
  const login = useRecoilValue(loginState);

  useEffect(() => {
    if (login.isLogin) {
      console.log('구독 시도');
      const EventSource = NativeEventSource || EventSourcePolyfill;
      const source = new EventSource(
        'http://localhost:8080/notification/subscribe',
        { withCredentials: true }
      );

      source.onopen = () => {
        console.log('SSE 연결 성공');
      };

      source.onmessage = (e) => {
        if (e.type === 'message' && e.data.startsWith('{')) {
          setNotifications((prev) => [JSON.parse(e.data)]);
          setAlertOpen(true); // 알림을 띄워주는 state
        }
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
    <div>
      <h2>실시간 알림</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotiComponent;
