import React, { FC } from "react";
import styled from "styled-components";
import { generatePath } from "react-router-dom";
import parse from "html-react-parser";
import { Pathes } from "@src/routes";

import { useAppDispatch, useAppSelector, deleteTask } from "@src/redux";
import { useTiming } from "./hooks";

import { Link } from "@src/components/link";
import { Button } from "@src/components/buttons";
import { Badge } from "@src/components/badge";
import { Priority, Executor } from "./components";

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
  font-size: 14px;

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
        font-size: 18px;
        font-weight: 600;
      }
    }

    &-description {
      min-height: 32px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: ${({ theme }) => theme.text.gray};
    }

    &-identifiers {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .lower {
    display: flex;
    align-items: center;
    /* flex-direction: row-reverse; */
    justify-content: space-between;
  }
`;

export const TaskCard: FC<TaskProps> = (props) => {
  const appDispatch = useAppDispatch();
  const userID = useAppSelector((state) => state.auth.userID);

  const {
    _id,
    title,
    description,
    projectId,
    status,
    priority,
    owner,
    executor,
    ...rest
  } = props;

  const time = useTiming({ status, ...rest });

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

          <Badge title={`${status} ${time}`} status={status} size="s" />
        </div>

        <p className="upper-description">{parse(description)}</p>

        <div className="upper-identifiers">
          <Executor executor={executor} />
        </div>
      </div>

      <div className="lower">
        {userID === owner && (
          <Button
            title="Delete"
            size="s"
            variant="ghost"
            onClick={() => appDispatch(deleteTask(_id))}
          />
        )}

        <Priority priority={priority} />
      </div>
    </TaskCardStyled>
  );
};
