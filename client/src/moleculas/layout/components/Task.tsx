import React, { FC } from "react";
import styled from "styled-components";
import { generatePath } from "react-router-dom";
import { Pathes } from "@src/routes";

import { useAppDispatch, deleteTask } from "@src/redux";

import { Link } from "@src/components/link";
import { Button } from "@src/components/buttons";
import { Badge } from "@src/components/badge";

import { TaskProps } from "../interfaces";

const TaskStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bg.light};
  text-decoration: none;
  overflow: hidden;
  cursor: move;

  .task-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    overflow: hidden;
    flex-shrink: 0;

    &-link {
      font-size: 20px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .task-description {
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.base};
  }
`;

export const Task: FC<TaskProps> = (props) => {
  // status, created, finished, executor,

  const { _id, title, description, projectId, status } = props;

  const appDispatch = useAppDispatch();

  return (
    <TaskStyled>
      <div className="task-head">
        <Link
          to={generatePath(Pathes.task, { projectId, taskId: _id })}
          className="task-head-link"
        >
          {title}
        </Link>

        <Badge title={status} status={status} size="s" />
      </div>

      <p className="task-description">{description}</p>

      <div>
        <Button
          title="Delete"
          size="s"
          onClick={() => appDispatch(deleteTask(_id))}
        />
      </div>
    </TaskStyled>
  );
};
