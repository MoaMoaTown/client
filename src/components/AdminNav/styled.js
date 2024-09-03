import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 16vw;
  height: 100%;
  background-color: rgba(30, 157, 139, 0.7);
  border-radius: 10px;
`;

export const TownInfoWrapper = styled.div`
  padding: 0vh 2vw;
`;

export const MenuWrapper = styled.div`
  padding: 0vh 2vw;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  text-align: left;
  font-weight: bold;
  margin-top: 5vh;
  margin-bottom: 3vh;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0vh 0.5vw;
`;

export const MenuLink = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 2vh;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const CopyrightText = styled.p`
  position: absolute;
  bottom: 8vh;
  left: 6vw;
  text-align: left;
  font-size: 0.8rem;
  white-space: pre-wrap;
  color: ${colors.dark_gray};
`;

export const TownInfo = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 2vh;
`;
