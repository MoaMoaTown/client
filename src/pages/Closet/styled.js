import styled from 'styled-components';
import { colors } from '../../styles/colors';

/**
 * 옷장 페이지 style
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
  width: 100dvw;
  height: 100dvh;

`;

export const Wrapper = styled.div`
  width: 84dvw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4dvh 8dvw;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 8dvw;
    height: 8vw;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`;