import styled from 'styled-components';
import { colors } from '../../styles/colors';

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
  margin-bottom: 1vh;
`;

export const GridContainer = styled.div`
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
`;

export const ChartWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ChartTitle = styled.div`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1vh;
`;
