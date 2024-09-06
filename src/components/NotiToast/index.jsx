import React, { useEffect, useState } from 'react';
import { ToastContainer, CloseIcon, Title, Wrapper } from './styled';
import closeIcon from '../../assets/images/close.svg';

const NotiToast = ({ setToast, text }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        setToast(false);
      }, 1000);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastContainer show={show} role='alert' aria-live='assertive'>
      <Wrapper>
        <Title>🔔알림</Title>
        <CloseIcon
          src={closeIcon}
          onClick={() => {
            setShow(false);
          }}
        />
      </Wrapper>
      {/* <Heendy src={heendy} /> */}
      <p>{text}</p>
    </ToastContainer>
  );
};

export default NotiToast;
