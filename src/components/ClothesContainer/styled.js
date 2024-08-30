import styled from 'styled-components';
import { colors } from '../../styles/colors';

/**
 * 옷 style
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


export const ClothesContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4dvw;
  margin-top: 2dvh;
  padding: 0dvh 4dvw;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #f4f4f4;
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
`;