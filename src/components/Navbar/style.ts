// styles/NavbarStyles.ts
import { Bell, Gear, List, SignOut } from '@phosphor-icons/react';
import * as Avatar from '@radix-ui/react-avatar';
import styled from 'styled-components';
import * as colors from '@radix-ui/colors';
import { Content, Item } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';



export const NavbarContainer = styled.div<{ isSidebarVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => (theme.theme === 'dark' ? theme.background : theme.background)};
  padding: 10px 20px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  ${({ isSidebarVisible }) =>
    isSidebarVisible &&
    `
    padding-left: 200px;
    transition: padding-left 0.2s ease;
  `}
  ${({ isSidebarVisible }) =>
    !isSidebarVisible &&
    `
    transition: padding-left 0.2s ease;
  `}
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;
`;

export const NavItems = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  background: transparent;
  align-items: center;
  padding: 0;
  gap: 1rem;
`;

export const NavItem = styled.li`
  margin-left: 20px;
  background: transparent;
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  &:hover {
    color: #5dd5c5;
  }
`;

export const MenuIcon = styled(List)`
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  background-color: transparent;
  cursor: pointer;

`;

export const NotificationIcon = styled(Bell)`
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  background-color: transparent;
  cursor: pointer;
`
export const SingOutIcon = styled(SignOut)`
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  background-color: transparent;
  cursor: pointer;
`
export const SettingsIcon = styled(Gear)`
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  background-color: transparent;
  cursor: pointer;
`

export const NotificationWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationCount = styled.span<{ show: boolean }>`
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 10px;
  min-width: 14px;
  text-align: center;
  display: ${({ show }) => (show ? "inline" : "none")};
`;




export const FirstSide = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
`


export const AvatarRoot = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: ${colors.blackA.blackA3};
`;

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: ${colors.violet.violet11};
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
`;

export const DropdownContent = styled(Content)`
  // Estilos para o container do menu
  background-color: ${({ theme }) => (theme.theme === 'dark' ? theme.background : theme.background)};
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 180px;
`;

export const DropdownItem = styled(Item)`
  // Estilos para os itens do menu
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  gap: 5px;
`;

export const LogoutButton = styled(Link)`
    // Estilos para o botão de logout
  text-decoration: none;
  color: ${({ theme }) => (theme.theme === 'dark' ? "#A6B0CF" : "#495057")};
`
