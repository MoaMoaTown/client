import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  background-color: ${({ isCurrentUser }) =>
    isCurrentUser === 'Y' ? 'rgba(30, 157, 139, 0.2)' : 'white'};
  border-radius: 10px;
  padding: 5%;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.img`
  width: 10dvw;
  height: 10dvw;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const Nickname = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  margin-left: 4dvw;
`;

export const MoaImage = styled.img`
  width: 8dvw;
  height: 8dvw;
`;

export const Balance = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.dark_gray};
  margin-left: 2dvw;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
`;
