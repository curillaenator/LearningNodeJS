import React, { FC } from "react";
import styled from "styled-components";

import { Toolbar } from "../moleculas/toolbar";

const TaskPageStyled = styled.div`
  padding: 0 16px;
`;

export const TaskPage: FC = () => {
  const availableProjects = [
    { id: "svsfsaas", title: "Project one", onClick: () => {} },
    { id: "dsgsdg", title: "Project two", onClick: () => {} },
    { id: "xcbxcb", title: "Project three", onClick: () => {} },
    { id: "cvncvn", title: "Project four", onClick: () => {} },
  ];

  return (
    <TaskPageStyled>
      <Toolbar availableProjects={availableProjects} />
    </TaskPageStyled>
  );
};
