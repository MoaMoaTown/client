import { useEffect } from "react";
import { ToastContainer } from './styled';

const Toast = ({ setToast, text }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastContainer role="alert" aria-live="assertive">
      <p>{text}</p>
    </ToastContainer>
  );
}

export default Toast;