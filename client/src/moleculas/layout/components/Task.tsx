import React, { FC } from "react";
import styled from "styled-components";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { Pathes } from "@src/routes";

import { useAppDispatch, deleteTask } from "@src/redux";

import { Button } from "@src/components/buttons";

import { TaskProps } from "../interfaces";

const TaskStyled = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bg.light};
  text-decoration: none;
  cursor: move;

  .task-id {
    margin-bottom: 8px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.base};
  }
`;

export const Task: FC<TaskProps> = (props) => {
  // status, created, finished, executor,

  const navigate = useNavigate();

  const { _id, title, description, projectId } = props;

  const appDispatch = useAppDispatch();

  return (
    <TaskStyled>
      <Link
        className="task-id"
        to={generatePath(Pathes.task, { projectId, taskId: _id })}
      >
        {title}
      </Link>
      {/* <p className="task-title">{_id}</p> */}
      <p className="task-description">{description}</p>

      <Button
        title="Delete"
        size="s"
        onClick={() => appDispatch(deleteTask(_id))}
      />
    </TaskStyled>
  );
};
