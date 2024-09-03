import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
`;

export const Title = styled.div`
  font-size: 1.4rem;
  text-align: center;
  font-weight: bold;
  margin-top: 2vw;
`;

export const HandsImage = styled.img`
  width: 5vw;
  height: auto;
`;

export const Text = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: ${colors.dark_gray};
`;

export const TaxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2vw;
`;

export const MoaImage = styled.img`
  width: 4vw;
  height: 4vw;
`;

export const TaxText = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
