import styled, { css } from 'styled-components';

// style.ts
export const SidebarContainer = styled.aside`
  top: 0;
  left: 0;
  bottom: 0;
  position: relative;
  width: 80px;
  z-index: 100;
  background-color: ${({ theme }) =>
    theme.theme === 'dark' ? theme.background : theme.background};
  color: ${({ theme }) => (theme.theme === 'dark' ? '#A6B0CF' : '#495057')};
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: 0.5s ease;

  &.openSideBar {
    width: 350px;
  }

  &.closeSideBar {
    padding: 24px 16px;

    & ul div:nth-child(1) {
      padding: 16px 0px;
    }
    & p {
      display: none;
      position: absolute;
      left: -200%;
    }
    svg {
      z-index: 10;
      margin-left: 10px;
    }
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SidebarContent = styled.div`
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

export const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SidebarMenuItem = styled.li`
  margin-bottom: 4px;
  transition: 0.3s all;

  &:hover,
  &.activeItemSideBar {
    & p {
      transition: 0.3s all;
      color: ${({ theme }) => theme.primary};
    }

    svg {
      transition: 0.3s all;
      fill: ${({ theme }) => theme.primary};
    }
  }

  & svg {
    transition: 0.5s all;
  }

  &.showItemTab {
    position: relative;
    height: 57px;

    & div:nth-child(1) {
      background: ${({ theme }) => theme.light};
      box-shadow: 1px 0px 4px 1px rgba(0, 0, 0, 0.1);
      animation: openTab 0.5s forwards;
      position: absolute;
    }

    & p {
      position: absolute;
      top: 50%;
      left: 50px;
      transform: translate3d(0, -50%, 0);
      opacity: 1;
      margin-left: 10px;
      width: 200px;
    }

    @keyframes openTab {
      from {
        width: 43px;
      }
      to {
        width: 251px;
      }
    }

    &.showItemTab {
      & ul {
        display: none;
      }
    }

    &.activeItemSideBar {
      &.showItemTab {
        & div {
          border-bottom-right-radius: 0;
        }

        & p {
          display: block;
        }

        & ul {
          display: block;
          z-index: 10;
          position: absolute;
          top: 55px;
          left: 40px;
          height: auto;
          width: 200px;
          padding: 8px;
          background: ${({ theme }) => theme.light};
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          box-shadow: 1px 4px 4px 1px rgba(0, 0, 0, 0.1),
            -1px 4px 4px 1px rgba(0, 0, 0, 0.1);
          border-left: none;
        }
      }
    }
  }
`;

export const TabItem = styled.div`
  transition: 0.3s all;
  padding: 8px 0px;
  border-radius: 5px;
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: rgba(206, 212, 218, 0.2);

    & p {
      display: block;
    }
  }

  & svg {
    min-width: 25px;
    margin-right: 8px;
  }
`;

export const SubModule = styled.ul`
  overflow-x: hidden;
  display: none;
  position: relative;
  left: 0;
  right: 0;
  box-shadow: 0;
  margin: 0px 0px 0px 11px;
  padding-left: 8px;
  border-left: 1px solid rgba(29, 202, 150, 0.4);
  overflow: hidden;

  & li {
    transition: 0.3s;
    width: 100%;
    padding: 8px 0px 8px 8px;
    border-radius: 5px;
    color: #000;
    display: inline-block;

    &:hover {
      background: rgba(206, 212, 218, 0.3);
    }
  }

  &.activeSubItemSideBar {
    display: block;
    opacity: 1;
    height: auto;
    /* animation: openSideBar 0.5s forwards; */
  }

  &.disableSubItemSideBar {
    display: block;
    height: auto;
    /* animation: closeSideBar 0.5s forwards; */
  }

  @keyframes openSideBar {
    from {
      height: 0px;
    }

    to {
      height: auto;
    }
  }

  @keyframes closeSideBar {
    from {
      height: auto;
    }

    to {
      height: 0px;
    }
  }
`;

// Button Close SideBar
export const ContainerButton = styled.div`
  padding: 8px 3px;
  width: 40px;
  height: 36px;
  position: absolute;
  left: 115%;
  transition: all 0.5s;
  cursor: pointer;

  &.activeClose {
    left: 80%;
  }
`;

export const ButtonSideBar = styled.div`
  ${({ theme }) => css`
    left: 70px;
    top: 25px;
    display: flex;
    transition: all 0.5s;
    z-index: 2;

    & div {
      border-top: 3px solid ${theme.primary};
      width: 32px;
      border-radius: 0;
      position: absolute;
      transition: 0.5s;
    }

    & div:nth-child(2) {
      top: 19px;
    }

    & div:nth-child(3) {
      bottom: 5px;
    }

    & div.activeClose:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
      background: ${theme.primary};
    }

    & div.activeClose:nth-child(2) {
      width: 0px;
    }

    & div.activeClose:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
      background: ${theme.primary};
    }
  `}
`;
