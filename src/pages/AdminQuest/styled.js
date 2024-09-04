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
  margin-top: 2vw;
  margin-bottom: 1vw;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageButton = styled.button`
  background-color: transparent;
  color: ${({ active }) => (active ? 'black' : `${colors.dark_gray}`)};
  border: none;
  padding: 2vh 1vw;
  font-size: 1rem;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};

  &:hover {
    color: black;
  }
`;

export const PageNumber = styled.div`
  font-size: 1rem;
  text-align: center;
`;
