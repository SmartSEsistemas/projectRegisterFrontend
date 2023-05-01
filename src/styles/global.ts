import { createGlobalStyle } from 'styled-components';

export type StatusColor = "primary" | "secondary" | "warning" | "danger" | "lightGray" | "dark" | "light";

export interface StatusProps{
  statusColor: "primary" | "secondary" | "warning" | "danger" | "lightGray" | "dark" | "light";
  gridArea?: string;
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme["background"]};
    transition: background-color 0.2s ease-in-out;

  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const STATUS_COLORS = {
  primary: "primary",
  secondary: "secondary",
  warning: "warning",
  danger: "danger",
  lightGray: "lightGray",
  dark: "dark",
  light: "light",
} as const
