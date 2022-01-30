import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { store } from "./redux";
import { theme } from "./theme";

import { MainPage } from "./pages/MainPage";

import "./index.css";
import "react-grid-layout/css/styles.css";

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
