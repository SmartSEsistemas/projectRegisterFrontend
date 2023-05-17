import { Theme, alternativeTheme, defaultTheme } from "@/styles/theme/default";
import { createContext, useState } from "react";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === defaultTheme ? alternativeTheme : defaultTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
