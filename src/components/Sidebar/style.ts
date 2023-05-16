import styled from "styled-components";

// style.ts
export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => (theme.theme === 'dark' ? theme.background : theme.background)};
  color: ${({ theme }) => (theme.theme === 'dark' ? '#A6B0CF' : '#495057')};
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
  overflow: auto;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SidebarContent = styled.div`
  flex: 1;
`;

export const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SidebarMenuItem = styled.li`
  padding: 8px 0;
  cursor: pointer;
  transition: all 0.3s ease;
`;
