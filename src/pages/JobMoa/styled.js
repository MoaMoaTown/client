import styled from 'styled-components';
import { colors } from '../../styles/colors';
import bg_green from '../../assets/images/bg_green.svg';
export const Container = styled.div`
  background: ${colors.background_gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 84dvw;
  height: 92dvh;
  padding: 4dvh 8dvw;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  padding: 10% 10%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  background-image: url(${bg_green});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const JobListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ; /* 항목 사이의 간격을 설정 */
  overflow-y: auto; /* 내부에서 스크롤이 가능하도록 설정 */
  height: 100%;
`;

export const Description = styled.div`
  font-size: 1rem;
  text-align: center;
  white-space: pre-line;
  color: ${colors.dark_gray};
  line-height: 1.5;
  margin-top: -3dvh;
`;
