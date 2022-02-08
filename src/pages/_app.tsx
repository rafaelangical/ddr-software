import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyles } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
