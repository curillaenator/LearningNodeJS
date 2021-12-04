import React, { FC } from "react";
import styled from "styled-components";

import { Toolbar } from "../moleculas/toolbar";

const TaskPageStyled = styled.div`
  padding: 0 16px;
`;

export const TaskPage: FC = () => {
  const availableProjects = [
    { id: "svsfsaas", name: "Project one" },
    { id: "dsgsdg", name: "Project two" },
    { id: "xcbxcb", name: "Project three" },
    { id: "cvncvn", name: "Project four" },
  ];

  return (
    <TaskPageStyled>
      <Toolbar availableProjects={availableProjects} />
    </TaskPageStyled>
  );
};
