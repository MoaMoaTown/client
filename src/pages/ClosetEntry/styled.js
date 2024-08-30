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

export const ClosetTitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin-top: 13vh;
`;

export const ProfileImage = styled.img`
  width: 70dvw;
  height: 70dvw;
  border-radius: 8px;
  margin: 8vh;
  object-fit: cover;
`;