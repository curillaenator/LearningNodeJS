import React, { FC } from "react";
import styled from "styled-components";

import { TaskProps } from "../interfaces";

const TaskStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bg.light};
  cursor: move;

  .task-id {
    margin-bottom: 8px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.base};
  }
`;

export const Task: FC<TaskProps> = (props) => {
  const { _id, title, status, created, finished, executor, description } =
    props;

  return (
    <TaskStyled>
      <h3 className="task-id">{title}</h3>
      {/* <p className="task-title">{_id}</p> */}
      <p className="task-description">{description}</p>
    </TaskStyled>
  );
};
