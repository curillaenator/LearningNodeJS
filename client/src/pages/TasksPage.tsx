import React, { FC } from "react";
import styled from "styled-components";

import { Toolbar } from "../moleculas/toolbar";

const TaskPageStyled = styled.div`
  padding: 0 16px;
`;

export const TaskPage: FC = () => {
  return (
    <TaskPageStyled>
      <Toolbar />
    </TaskPageStyled>
  );
};
