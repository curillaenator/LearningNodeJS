import React, { FC } from "react";
import styled from "styled-components";

import { Header } from "../components/header";

const MainStyled = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const Main: FC = () => {
  return (
    <MainStyled>
      <Header />

      <h1>Hellow</h1>
    </MainStyled>
  );
};
