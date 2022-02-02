import React, { FC } from "react";
import styled from "styled-components";
import { generatePath } from "react-router-dom";
import { Pathes } from "@src/routes";

import { useAppDispatch, deleteTask } from "@src/redux";

import { Link } from "@src/components/link";
import { Button } from "@src/components/buttons";
import { Badge } from "@src/components/badge";
import { Priority } from "./components";

import { TaskProps } from "./interfaces";

const TaskCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.bg.light};
  text-decoration: none;
  overflow: hidden;
  cursor: move;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.base};
  }

  .upper {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      overflow: hidden;
      flex-shrink: 0;

      &-linkOuter {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &-linkInner {
        font-family: "Roboto Condensed", sans-serif;
        font-size: 18px;
        font-weight: 600;
      }
    }

    &-description {
      font-size: 14px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }

  .lower {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TaskCard: FC<TaskProps> = (props) => {
  // status, created, finished, executor,

  const { _id, title, description, projectId, status, priority } = props;

  const appDispatch = useAppDispatch();

  return (
    <TaskCardStyled>
      <div className="upper">
        <div className="upper-head">
          <Link
            to={generatePath(Pathes.task, { projectId, taskId: _id })}
            className="upper-head-linkOuter"
            innerClassName="upper-head-linkInner"
          >
            {title}
          </Link>

          <Badge title={status} status={status} size="s" />
        </div>

        <p className="upper-description">{description}</p>
      </div>

      <div className="lower">
        <Priority priority={priority} />

        <Button
          title="Delete"
          size="s"
          onClick={() => appDispatch(deleteTask(_id))}
        />
      </div>
    </TaskCardStyled>
  );
};
