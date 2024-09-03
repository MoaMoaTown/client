import { styled } from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 4vw;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
`;

export const LogoImage = styled.img`
  width: 10vw;
  height: auto;
  cursor: pointer;
`;

export const NotiImage = styled.img`
  width: 1.6vw;
  height: 1.6vw;
  cursor: pointer;
`;

export const Nickname = styled.div`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`;

export const Logout = styled.div`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${colors.dark_gray};
    text-decoration: underline;
  }
`;
