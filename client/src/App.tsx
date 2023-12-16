import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./style/global";
import theme from "./style/theme";

import router from "./routes/routing";
import Loading from "./pages/Loading";

function App() {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  });

  return (
    <Suspense fallback={<Loading />}>
      <RecoilRoot>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={router} />
          </ThemeProvider>
        </HelmetProvider>
      </RecoilRoot>
    </Suspense>
  );
}

export default App;
