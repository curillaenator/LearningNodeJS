import React, { FC } from "react";
import styled from "styled-components";

import { Header } from "../components/header";

const MainStyled = styled.div`
  color: ${({ theme }) => theme.text.dark};
`;

export const MainPage: FC = () => {
  return (
    <MainStyled>
      <Header />

      <p>Some text here</p>
    </MainStyled>
  );
};
