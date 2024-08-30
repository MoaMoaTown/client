import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const TypeSelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4dvh;
  margin-bottom: 2dvh;
`;

export const TypeButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: ${props => (props.active ? `${colors.green}` : 'white')};
  border: 1px;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  font-size: 16px;
`;
