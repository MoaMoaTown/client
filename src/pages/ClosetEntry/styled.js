import styled from 'styled-components';
import { colors } from '../../styles/colors';

/**
 * 옷장 진입 페이지 style
 * @author 임원정
 * @since 2024.08.30
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.08.30  	임원정        최초 생성
 * </pre>
 */

export const Container = styled.div`
  background: ${colors.background_gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 84dvw;
  height: 92dvh;
  padding: 4dvh 8dvw;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin-top: 4dvh;
`;

export const SubTitle = styled.div`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  margin-top: 8dvh;
`;

export const Username = styled.div`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 10dvh;
`;

export const ProfileImage = styled.img`
  width: 70dvw;
  height: 70dvw;
  border-radius: 20px;
  margin: 4dvh;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const PawWrapper = styled.div`
  position: fixed;
  top: 45dvh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 82dvw;
  height: auto;
  z-index: 1;
`;

export const Paw = styled.img`
  width: 12dvw;
  height: 12dvw;
`;
