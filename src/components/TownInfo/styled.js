import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const TownInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const InfoBox = styled.div`
  width: 60%;
  height: 5dvh;
  background-color: white;
  border-radius: 10px;
  padding: 2dvh 2dvw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StatsBox = styled.div`
  width: 20%;
  height: 5dvh;
  background-color: white;
  border-radius: 10px;
  padding: 2dvh 2dvw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1dvh;
`;

export const TownName = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5dvh;
`;

export const TownDescription = styled.p`
  font-size: 0.9rem;
  color: ${colors.gray};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
`;

export const StatIcon = styled.img`
  width: 6dvw;
  height: auto;
  margin-right: 1dvw;
`;

export const StatText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.dark_gray};
`;

export const RankBadge = styled.div`
  color: ${colors.orange};
  width: 5dvw;
  height: 5dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 2dvw 2dvw;
  border-radius: 5px;
  border: 2px solid ${colors.orange};
`;
