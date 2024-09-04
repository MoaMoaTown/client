import styled from 'styled-components';
import { colors } from '../../styles/colors';

// export const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: ${colors.background_gray};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 3vh 4vw 4vh;
//   box-sizing: border-box;
// `;

// export const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-top: 2vw;
// `;

export const ContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  margin-left: 4vw;
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
  margin-top: 2vw;
  margin-bottom: 1vw;
`;
