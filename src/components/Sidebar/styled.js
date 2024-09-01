import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const SidebarContainer = styled.div`
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  top: 0;
  width: 50dvw;
  height: 100%;
  background-color: white;
  transition: 0.3s ease-in-out;
  z-index: 100;
  border-radius: 10px;
  box-shadow: ${({ isOpen }) =>
    isOpen ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none'};
`;

export const CloseIcon = styled.img`
  position: absolute;
  width: 7dvw;
  height: auto;
  top: 5dvw;
  right: 5dvw;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  position: absolute;
  width: 40dvw;
  height: auto;
  top: 8dvh;
  right: 5dvw;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  padding: 5dvh 5dvw;
  margin-top: 15dvh;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SidebarLink = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 3dvh;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: ${colors.green};
  }
`;

export const SidebarLinkIcon = styled.img`
  width: 7dvw;
  height: auto;
  margin-right: 2dvw;
`;

export const CopyrightText = styled.p`
  position: absolute;
  bottom: 5dvh;
  left: 5dvw;
  text-align: left;
  font-size: 0.8rem;
  white-space: pre-wrap;
  color: ${colors.gray};
`;
