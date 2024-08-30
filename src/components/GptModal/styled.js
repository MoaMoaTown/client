import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCard = styled.div`
  background: white;
  width: 70vw;
  color: black;
  border-radius: 1vw;
  border: 0.5px solid #fdfafa;
  box-shadow: 2px 3.5px 4px -3px gray;
  padding: 2dvh 5dvw;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.gray};
  padding-bottom: 2dvh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-wrap: break-word;
  white-space: normal;
  padding: 2dvh 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const GptLogoImage = styled.img`
  width: 15%;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;
