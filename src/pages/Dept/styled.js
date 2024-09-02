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

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 200px;
  padding: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const ToggleContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 50px;
  border-radius: 15px;
`;

export const ActiveBackground = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.activeIndex === 1 ? '50%' : '0')};
  width: 50%;
  height: 100%;
  background-color: ${colors.green};
  border-radius: 200px;
  transition: left 0.5s ease;
  z-index: 1;
`;

export const ToggleButton = styled.button`
  flex: 1;
  background-color: transparent;
  color: ${(props) => (props.active ? colors.white : colors.gray)};
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  margin: 0;
  border-radius: 15px;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 2;
  position: relative;

  &:hover {
    color: ${(props) => (props.active ? colors.white : colors.black)};
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
