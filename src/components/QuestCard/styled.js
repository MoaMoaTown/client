import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 90%;
  height: 75%;
  background-color: white;
  border-radius: 20px;
  padding: 5%;
`;

export const ContentWrapper = styled.div`
  width: 100;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 2dvh;
`;

export const ItemWrapper = styled.div`
  background-color: ${colors.background_gray};
  border-radius: 10px;
  padding: 2dvh 5% 1.6dvh 5%;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2dvh;
  flex-grow: 1;
`;

export const TitleText = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const DateText = styled.span`
  font-size: 0.9rem;
  color: ${colors.gray};
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  color: ${colors.dark_gray};
  margin-bottom: 2dvh;
  flex-grow: 2;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconImage = styled.img`
  width: 5dvw;
  height: auto;
  margin-right: 2dvw;
`;

export const ParticipantsText = styled.span`
  font-size: 1rem;
`;

export const StatusButton = styled.button`
  padding: 1dvh 3dvw;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  background-color: ${({ disabled }) =>
    disabled ? colors.gray : colors.green};
  border: none;
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
