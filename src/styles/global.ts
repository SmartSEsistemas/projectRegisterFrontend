import styled, { createGlobalStyle } from 'styled-components';

export type StatusColor =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'lightGray'
  | 'dark'
  | 'light'
  | 'blue';

export interface StatusProps {
  statusColor:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'danger'
    | 'lightGray'
    | 'dark'
    | 'light'
    | 'blue';

  gridArea?: string;
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    
  }

  a {
    color: inherit;
  }

  body {
    background-color: ${({ theme }) => theme['background']};
    transition: background-color 0.2s ease-in-out;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }

`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainContent = styled.div`
  transition: margin-left 0.5s;
  width: 100%;
  min-height: 110vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: transparent;
  grid-column: span 2;
  padding: 1.5rem;
  box-sizing: border-box;

  @media (max-width: 870px) {
    padding: 1.5rem 0 1.5rem 0;
  }
`;

export const ContainerInner = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) =>
    theme.theme === 'dark' ? '#2A3042' : theme.light};
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  padding: 32px;
  box-sizing: border-box;
  min-height: 70vh;
`;

export const TitlePage = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.blue};
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 870px) {
    font-size: 1.5rem;
  }
`;

export const STATUS_COLORS = {
  primary: 'primary',
  secondary: 'secondary',
  warning: 'warning',
  danger: 'danger',
  lightGray: 'lightGray',
  dark: 'dark',
  light: 'light',
  blue: 'blue',
} as const;
