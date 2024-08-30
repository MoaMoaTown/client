import styled from "styled-components";
import { colors } from "../../styles/colors";

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

export const Dept_backImage = styled.img`
  width: 100%;
  position: relative; /* 버튼을 배치하기 위한 relative 속성 추가 */
`;

// export const ClothButtonStyled = styled.div`
//   position: absolute;
//   justify-content: space-between;
//   top: 10%; /* 이미지 안에서 버튼을 하단에 배치 */
//   left: 50%;
//   transform: translateX(-50%);
//   width: 100%;
//   height: auto;
// `;

export const ClothButtonStyled = styled.div`
  position: absolute;
  top: 10%; /* 이미지 안에서 첫 번째 버튼을 상단에 배치 */
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  display: flex;
  flex-direction: column; /* 버튼들을 위아래로 배치 */
  justify-content: space-between; /* 버튼들 사이에 균등한 간격을 제공 */
  align-items: center; /* 버튼들을 수평 중앙에 배치 */
  gap: 20px;
`;
export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const ToggleButton = styled.button`
  background-color: ${(props) => (props.active ? colors.primary : colors.gray)};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.active ? colors.primary_dark : colors.dark_gray};
  }
`;
