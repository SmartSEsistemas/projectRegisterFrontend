import { ToastContainer } from "react-toastify";
import styled from "styled-components";



export const Alert = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${({ theme }) => (theme.theme === 'dark' ? "#2A3042" : theme.light)};
    box-shadow: black 0px 2px 10px;
    font-weight: bold;
    color: ${({ theme }) => (theme.theme === 'dark' ? "#F6F6F6" : "#000000")};
  }`


export const MainContent = styled.div<{ isSidebarVisible: boolean }>`
  transition: margin-left .5s;
  margin-left: ${({ isSidebarVisible }) => (isSidebarVisible ? '100px' : '0')};
  opacity: ${({ isSidebarVisible }) => (isSidebarVisible ? '0.3' : '1')};
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
}  
`

export const ModulosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px; // Ajustado para 8px
    justify-content: center;
    width: 100%;
    padding: 3rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: auto;
`