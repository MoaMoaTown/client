import styled from 'styled-components';
import { colors } from '../../styles/colors';
import dept_back from '../../assets/images/dept_back.svg';

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

export const DeptTitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  padding: 5% 5%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(${dept_back});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ClothButtonStyled = styled.div`
  height: 84%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  overflow-y: auto;
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  position: relative;
  background-color: ${colors.light_gray};
  border-radius: 4px;
  overflow: hidden;
`;

export const ToggleButton = styled.button`
  flex: 1;
  background-color: ${(props) =>
    props.active ? colors.primary : colors.white};
  color: ${(props) => (props.active ? colors.white : colors.black)};
  border: none;
  padding: 10px 20px;
  margin: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.active ? colors.primary_dark : colors.gray};
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MoaImage = styled.img`
  width: 8dvw;
  height: 8dvh;
  margin-left: 5px;
`;
