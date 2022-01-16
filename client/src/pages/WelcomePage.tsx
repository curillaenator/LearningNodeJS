import React, { FC } from "react";
import styled from "styled-components";

// import { Loader } from "../components/loader";

const WelcomePageStyled = styled.div``;

export const WelcomePage: FC = () => {
  return (
    <WelcomePageStyled>
      <h1>Welcome</h1>

      {/* <Loader size="s" /> */}
    </WelcomePageStyled>
  );
};
