import { ToastContainer } from "react-toastify";
import styled from "styled-components";



export const Alert = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${({ theme }) => (theme.theme === 'dark' ? "#2A3042" : theme.light)};
    box-shadow: black 0px 2px 10px;
    font-weight: bold;
    color: ${({ theme }) => (theme.theme === 'dark' ? "#F6F6F6" : "#000000")};
  }`


export const MainContent = styled.div<{isSidebarVisible: boolean }>`
  transition: margin-left .5s;
  margin-left: ${({ isSidebarVisible }) => (isSidebarVisible ? '250px' : '0')};
  opacity: ${({ isSidebarVisible }) => (isSidebarVisible ? '0.3' : '1')};
`;