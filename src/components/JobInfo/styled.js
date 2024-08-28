import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  padding: 5%;
`;

export const TitleText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.black};
`;

export const DescriptionText = styled.span`
  font-size: 0.8rem;
  color: ${colors.gray};
  font-weight: 600;
  margin-top: 1dvh;
  display: block;
`;

export const PayText = styled.span`
  position: absolute;
  top: 50%;
  right: 5%;
  font-size: 1rem;
  color: ${colors.dark_gray};
  font-weight: bold;
  transform: translateY(-50%);
`;
