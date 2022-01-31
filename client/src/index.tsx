import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { store } from "@src/redux";
import { theme } from "@src/theme";

import { MainPage } from "@src/pages/MainPage";

import "@src/index.css";
import "@src/react-grid-layout.css";

render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainPage />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
