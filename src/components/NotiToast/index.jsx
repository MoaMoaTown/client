import React, { useEffect, useState } from 'react';
import { ToastContainer, CloseIcon, Title, Wrapper, Content } from './styled';
import closeIcon from '../../assets/images/close.svg';

/**
 * 알림창 컴포넌트
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
        <Title>🔔 알림</Title>
        <CloseIcon
          src={closeIcon}
          onClick={() => {
            setShow(false);
          }}
        />
      </Wrapper>
      <Content>{text}</Content>
    </ToastContainer>
  );
};

export default NotiToast;
