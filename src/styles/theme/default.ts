// styles/theme.ts
export interface Theme {
  theme: string;
  borderColor: string;
  background: string;
  primary: string;
  secondary: string;
  warning: string;
  danger: string;
  lightGray: string;
  dark: string;
  light: string;
}



export const defaultTheme: Theme = {
  theme: "light",
  background: "#F8F8FB",
  borderColor: "#CED4DA",
  primary: "#00c489",
  secondary: "#14213d",
  warning: "#f1b44c",
  danger: "#f46a6a",
  lightGray: "#e5e5e5",
  dark: "#000000",
  light: "#ffffff",

};

export const alternativeTheme: Theme = {
  theme: "dark",
  background: "#222736",
  borderColor: "#32394e",
  primary: "#457eff",
  secondary: "#14213d",
  warning: "#f1b44c",
  danger: "#f46a6a",
  lightGray: "#e5e5e5",
  dark: "#000000",
  light: "#ffffff",
};
