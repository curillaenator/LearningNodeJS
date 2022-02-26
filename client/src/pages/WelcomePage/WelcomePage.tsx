import React, { FC } from "react";
import styled from "styled-components";

const WelcomePageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
`;

export const WelcomePage: FC = () => {
  return (
    <WelcomePageStyled>
      <h1>Welcome</h1>
    </WelcomePageStyled>
  );
};
