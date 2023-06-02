import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import {
  ThemeContext,
  ThemeProvider as CustomThemeProvider,
} from '@/contexts/ThemeContext';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </CustomThemeProvider>
  );
}
