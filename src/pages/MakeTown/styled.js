import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 4dvh;
  width: 100vw;
  height: 100%;
  position: relative;
`;

export const Logo = styled.img`
  width: 16vw;
  margin-top: 10vh;
  margin-bottom: 5vh;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 4vh;
  text-align: center;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 4vh;
  text-align: center;
  white-space: pre-line;
  color: ${colors.dark_gray};
  line-height: 1.5;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3dvh;
  width: 24vw;
`;

export const Wrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  align-items: right;
  justify-content: right;
  gap: 1vw;
`;

export const Nickname = styled.div`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  color: ${colors.dark_gray};
`;

export const Logout = styled.div`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  color: ${colors.dark_gray};
  &:hover {
    text-decoration: underline;
  }
`;

export const InputField = styled.input`
  width: 22vw;
  padding: 1vw;
  border-radius: 20px;
  border: 1px solid ${colors.gray};
  font-size: 1rem;
  outline: none;
  background-color: ${colors.background_gray};
  &::placeholder {
    color: ${colors.dark_gray};
  }
`;

export const MoaImage = styled.img`
  width: 3vw;
  height: 3vw;
`;

export const SalaryWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-contents: space-between;
  margin-bottom: 3vh;
`;

export const SelectField = styled.select`
  flex-grow: 1;
  padding: 1vw;
  border-radius: 20px;
  border: 1px solid ${colors.gray};
  font-size: 1rem;
  outline: none;
  background-color: ${colors.background_gray};
  color: ${colors.dark_gray};
`;

export const Option = styled.option`
  font-size: 1rem;
`;

export const PayCycleText = styled.h1`
  font-size: 1.2rem;
  text-align: left;
  font-weight: bold;
  white-space: nowrap;
  margin-right: 1vw;
`;
