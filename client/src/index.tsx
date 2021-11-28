import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { store } from "./redux";
import { theme } from "./theme";

import { MainPage } from "./pages/MainPage";

import "./index.css";

render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
